import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.delta };
    case "dec":
      return { ...state, count: state.count - state.delta };
    case "setDelta":
      return { ...state, delta: action.payload };
    default:
      throw new Error();
  }
}

export default function CntReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    delta: 1,
  });
  return (
    <div>
      <p>Counter : {state.count}</p>
      <input
        type="text"
        onChange={(e) =>
          dispatch({
            type: "setDelta",
            payload: Number(e.target.value),
          })
        }
        value={state.delta}
      />
      <button onClick={() => dispatch({ type: "inc" })}>
        Inc
      </button>
      <button onClick={() => dispatch({ type: "dec" })}>
        Dec
      </button>
    </div>
  );
}
