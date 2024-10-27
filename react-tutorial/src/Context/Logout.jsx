import { useContext } from "react";
import { UserCtx } from "./UserProvider";

export default function Logout() {
  const { dispatchUser } = useContext(UserCtx);
  return (
    <div>
      <button
        onClick={() => dispatchUser({ type: "logout" })}>
        Log out
      </button>
    </div>
  );
}
