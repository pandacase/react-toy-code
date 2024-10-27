import { useContext, useState } from "react";
import { UserCtx } from "./UserProvider";

export default function Login() {
  const [name, setName] = useState("");
  {/* 更推荐使用更简洁的 useContext Hook */}
  const { setUser } = useContext(UserCtx);
  function handleSubmit(e) {
    e.preventDefault();
    setUser(name);
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
