import { useEffect, useState } from "react";
import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// const fetcher = (url) => fetch(url).then((res) => res.json());

const fetcher = async url => {
  const res = await fetch(url)

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}

// ...
//const { data, error } = useSWR('/api/user', fetcher)
// error.info === {
//   message: "You are not authorized to access this resource.",
//   documentation_url: "..."
// }
// error.status === 403


export default function ISSTracker() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  // SWR-Hook verwenden um Daten zu fetchen. Refresh-Intervall von 2 Sekunden, und manuelles Aktualisieren erlauben
  const { data: position, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 4000, // Aktualisiert alle 4 Sekunde
  });

  useEffect(() => {
    if (position) {
      setCoords({ longitude: position.longitude, latitude: position.latitude });
    }
  }, [position]);

  // Lade- und Fehlerzustände abfangen
  if (error) return <div>Failed to load ISS data</div>
  if (isLoading || !position) return <div>Loading ISS data...</div>;

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