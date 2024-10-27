import { createContext, useState } from "react";
import Login from "./Login";
import Checkout from "./Checkout";

export const UserCtx = createContext();

export default function Ctx() {
  const [user, setUser] = useState("");
  return (
    <div>
      <UserCtx.Provider value={{ user, setUser }}>
        <Login />
        <Checkout />
      </UserCtx.Provider>
    </div>
  );
}
