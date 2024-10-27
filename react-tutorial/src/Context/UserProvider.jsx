import { createContext, useReducer, useState } from "react";

export const UserCtx = createContext();

export default function UserProvider({ children }) {
  function UserReducer(state, action) {
    switch (action.type) {
      case "login":
        return action.payload;
      case "logout":
        return "Guest"
    }
  }
  const [user, dispatchUser] = useReducer(UserReducer, "Guest");
  return (
    <UserCtx.Provider value={{ user, dispatchUser }}>
      {children}
    </UserCtx.Provider>
  );
}
