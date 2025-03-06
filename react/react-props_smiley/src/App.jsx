// Props are like parameters that you pass to components
// They allow components to be dynamic and reusable
function Smiley({ isHappy }) {
  // isHappy is a prop that we destructure from the props object
  // When we use <Smiley isHappy={true} />, isHappy will be true
  // When we use <Smiley /> without the prop, isHappy will be undefined (falsy)
  return (
    <>
      <h1>Smiley Component with Props</h1>
      {/* We can use props to conditionally render different content */}
      <p>{isHappy ? '😁' : '😢'}</p>
    </>
  );
}

export default function App() {
  return (
    <>
      {/* Here we pass the isHappy prop to our Smiley component */}
      <Smiley isHappy={true} /> {/* This will show a happy face */}
      <Smiley /> {/* This will show a sad face since isHappy is undefined */}
    </>
  )
}
