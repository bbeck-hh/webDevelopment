import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";


export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    getISSCoords();
  }, []);

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`API antwortete nicht. Status: ${response.status}`);
      }

      const data = await response.json();
      setCoords({ latitude: data.latitude, longitude: data.longitude });

    } catch (error) {
      console.error(error);
      console.error(error.message = "Sorry, there went somethig wrong. Come back later again:");
    }
  }


  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
