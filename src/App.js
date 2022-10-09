import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((prev) => prev + 1);
  console.log("I run all the time");
  useEffect(() => {
    console.log("CALL");
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
