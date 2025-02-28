function Smiley({ isHappy }) {
  return (
    <>
      <h1>Smiley 😁 component!</h1>
      <p>{isHappy ? '😁' : '😢'}</p>
    </>
  );
}

export default function App() {
  return (
    <>
      <Smiley isHappy /> isHappy
      <Smiley /> isHappy = false / nicht gesetzt
    </>
  )
}
