import React, { useState } from "react";

export default class Fiber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello, " + props.name + "!",
      message: props.message,
    };
  }

  render() {
    window.AppFiberNode = this._reactInternals;
    // console.log(window.AppFiberNode);
    return <Counter />;
  }
}

function Counter() {
  const [count1, setCount1] = useState(100);
  const [count2, setCount2] = useState(200);
  console.log(window.AppFiberNode.child);
  return (
    <div>
      <h2>
        {count1}, {count2}
      </h2>
      <button onClick={() => setCount1(count1 + 1)}>
        1+1
      </button>
      <button onClick={() => setCount2(count2 + 2)}>
        2+2
      </button>
    </div>
  );
}
