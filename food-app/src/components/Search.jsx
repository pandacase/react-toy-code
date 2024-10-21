import { useEffect, useState } from "react";

const URL =
  "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "asd";
// d02ad6f77cd148938f7fafda6b615f58

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    (async function fetchFood() {
      const res = await fetch(
        `${URL}?query=${query}&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setFoodData(data.results);
    })();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
