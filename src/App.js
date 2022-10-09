import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'count' changes");
  }, [count]);
  useEffect(() => {
    console.log("I run when 'keyword' or 'count' changes");
  }, [keyword, count]);
  return (
    <div>
      <input
        value={keyword}
        placeholder="Search here.."
        type="text"
        onChange={onChange}
      ></input>
      <h1>{count}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
