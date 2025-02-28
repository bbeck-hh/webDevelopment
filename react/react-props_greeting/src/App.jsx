function Greeting({ name }) {
  return (
    <h1>Hallo {name === "Pauli" ? `Coach, ${name}` : `und Moinsen, ${name}`}</h1>
  )
}

// "Hello, Coach!" if the `name` prop matches the name of one of your coaches.

export default function App() {
  return (
    <>
      <Greeting name="Paulii" />
      <Greeting name="Pauli" />
    </>
  );
}
