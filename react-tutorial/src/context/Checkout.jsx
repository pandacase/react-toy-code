import { UserCtx } from "./UserProvider";

export default function Checkout() {
  return (
    <div>
      {/* 传统的 Consumer 方式（可能会带来太多层嵌套） */}
      <UserCtx.Consumer>
        {({ user }) => <div>Checkout for {user}</div>}
      </UserCtx.Consumer>
    </div>
  );
}
