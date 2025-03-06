// Props can be used to pass any type of data to components
// Here we accept a 'name' prop that we'll use in our greeting
function Greeting({ name }) {
  // We can use props in conditional expressions
  // This creates dynamic behavior based on the prop value
  return (
    <h1>Hallo {name === "Pauli" ? `Coach, ${name}` : `und Moinsen, ${name}`}</h1>
  )
}

// "Hello, Coach!" if the `name` prop matches the name of one of your coaches.

export default function App() {
  return (
    <>
      {/* We can reuse the same component with different prop values */}
      <Greeting name="Paulii" /> {/* Renders: Hello Paulii! */}
      <Greeting name="Pauli" /> {/* Renders: Hello Coach Pauli! */}
    </>
  );
}
