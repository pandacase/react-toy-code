import { createContext, useState } from "react";

export const UserCtx = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState("Guest");
  return (
    <UserCtx.Provider value={{ user, setUser }}>
      {children}
    </UserCtx.Provider>
  );
}
