function Hello(props) {
  return (
    <div>
      <h1>
        {props.message}! {props.emoji} {props.name}!{" "}
        {props.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
