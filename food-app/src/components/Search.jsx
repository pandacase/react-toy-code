import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL =
  "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  const [dbQuery, setDbQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDbQuery(query);
    }, 500);
    // 当新一轮 effect 生效时，上一轮会被 unmount
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    (async function fetchFood() {
      const res = await fetch(
        `${URL}?query=${query}&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setFoodData(data.results);
    })();
  }, [dbQuery]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
