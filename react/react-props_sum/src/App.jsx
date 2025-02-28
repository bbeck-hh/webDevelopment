function Sum({ valueA, valueB }) {
  return (
    <>
      <h1>Sum component!</h1>
      <span>{valueA} + {valueB}</span>
      <br />
      <span className="resultSum">Ergebnis: {valueA + valueB}</span>
    </>
  )
}

export default function App() {
  return (
    <>
      <Sum valueA={12} valueB={22} />
    </>
  )
}
