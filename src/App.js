import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((current) => current + 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
