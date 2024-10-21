import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);

  function incCnt() {
    setCount(count + delta);
  }
  function decCnt() {
    setCount(count - delta);
  }

  function incDelta() {
    setDelta(delta + 1);
  }
  function decDelta() {
    setDelta(delta - 1);
  }

  return (
    <div>
      <div>Count : {count}</div>
      <button onClick={incCnt}>+</button>{" "}
      <button onClick={decCnt}>-</button>
      <div>Inc : {delta}</div>
      <button onClick={incDelta}>+</button>
      <button onClick={decDelta}>-</button>
    </div>
  );
}
