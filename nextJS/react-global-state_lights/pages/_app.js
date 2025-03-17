import { useState } from "react";
import Layout from "../components/Layout";
import GlobalStyle from "../styles";

const initialLightStatus = [
  {
    name: "Living Room",
    isOn: false,
    Id: 1
  },
  {
    name: "Kitchen",
    isOn: false,
    Id: 2
  },
  {
    name: "Bedroom",
    isOn: false,
    Id: 3
  },
  {
    name: "Bathroom",
    isOn: false,
    Id: 4
  },
  {
    name: "Garage",
    isOn: false,
    Id: 5
  },
  {
    name: "Porch",
    isOn: false,
    Id: 6
  },
  {
    name: "Garden",
    isOn: false,
    Id: 7
  },
  {
    name: "Office",
    isOn: false,
    Id: 8,
  },
]

// https://github.com/wd-bootcamp/web-exercises/blob/main/sessions/react-global-state/lights_solution/pages/_app.js

export default function App({ Component, pageProps }) {
  const [lampen, setLampen] = useState(initialLightStatus);

  function onToggleLampe(id) {
    setLampen((lampen) =>
      lampen.map((lampe) => {
        if (lampe.id === id) {
          return { ...lampe, isOn: !lampe.isOn };
        }
        return lampe;
      })
    );
  }

  function turnAllLampenOff() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  function turnAllLampenOn() {
    setLampen((lampen) =>
      lampen.map((lampe) => {
        return { ...lampe, isOn: true };
      })
    );
  }

  const lampenOnCount = lampen.filter(({ isOn }) => isOn).length;

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lampen={lampen}
        onToggleLampe={onToggleLampe}
        turnAllLampenOff={turnAllLampenOff}
        turnAllLampenOn={turnAllLampenOn}
        lampenOnCount={LampenOnCount} />
    </Layout>
  );
}
