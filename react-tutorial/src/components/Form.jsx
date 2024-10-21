import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form action="">
        <input
          onChange={(e) =>
            setName({ ...name, firstName: e.target.value })
          }
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) =>
            setName({ ...name, lastName: e.target.value })
          }
          type="text"
          value={name.lastName}
        />
        <button onClick={(e) => handleSubmit(e)}>
          Test
        </button>
      </form>
    </div>
  );
}
