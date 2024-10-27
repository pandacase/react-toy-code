import { useContext } from "react";
import { UserCtx } from "./UserProvider";

export default function Logout() {
  const { setUser } = useContext(UserCtx);
  return (
    <div>
      <button onClick={() => setUser("Guest")}>
        Log out
      </button>
    </div>
  );
}
