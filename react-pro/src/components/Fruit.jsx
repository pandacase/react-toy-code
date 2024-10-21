export default function Fruit({ fruit }) {
  return (
    <>
      <li key={fruit.name}>
        {fruit.emoji} {fruit.name} ${fruit.price}{" "}
        {fruit.soldout ? "sold out" : ""}
      </li>
    </>
  );
}
