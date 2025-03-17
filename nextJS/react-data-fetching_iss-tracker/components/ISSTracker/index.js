import { useEffect, useState } from "react";
import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ISSTracker() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  // SWR-Hook verwenden um Daten zu fetchen. Refresh-Intervall von 2 Sekunden, und manuelles Aktualisieren erlauben
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 2000, // Aktualisiert alle 2 Sekunde
  });

  useEffect(() => {
    if (data) {
      setCoords({ longitude: data.longitude, latitude: data.latitude });
    }
  }, [data]);

  // Lade- und Fehlerzustände abfangen
  if (error) return <div>Failed to load ISS data</div>
  if (isLoading || !data) return <div>Loading ISS data...</div>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()} // Ermöglicht manuelles Aktualisieren
      />
    </main>
  );
}