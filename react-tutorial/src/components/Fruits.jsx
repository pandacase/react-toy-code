import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    {
      name: "apple",
      price: 7,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: "mango",
      price: 5,
      emoji: "🥭",
      soldout: false,
    },
    {
      name: "lemon",
      price: 2,
      emoji: "🍋",
      soldout: false,
    },
    {
      name: "peach",
      price: 8,
      emoji: "🍑",
      soldout: false,
    },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <Fruit fruit={fruit} />
      ))}
    </div>
  );
}
