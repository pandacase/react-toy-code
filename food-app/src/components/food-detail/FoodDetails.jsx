import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import IngreList from "./IngreList";

const URL = "https://api.spoonacular.com/recipes";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    (async function fetchRecipe() {
      const res = await fetch(
        `${URL}/${foodId}/information?apiKey=${API_KEY}`
      );
      const data = await res.json();
      setFood(data);
      setIsLoaded(true);
      console.log(data);
    })(); //TODO call it
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img
          className={styles.recipeImg}
          src={food.image}
          alt="🍕"
        />
        <div className={styles.recipeDetails}>
          <span>
            ⏱️
            <strong> {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪<strong> Server {food.servings}</strong>
          </span>
          <span>
            {food.vegetarian
              ? "🥕 Vegetarian"
              : "🍖 Non-vegetarian"}
          </span>
          <span>{food.vegan ? "🌿 Vegan" : ""}</span>
        </div>

        <div>
          <span>$ {food.pricePerServing} Per serving</span>
        </div>

        <h2>Ingredients</h2>
        <IngreList isLoaded={isLoaded} food={food} />

        <h2>Instructions</h2>
        <div className={styles.recipeInst}>
          <ol>
            {isLoaded ? (
              food.analyzedInstructions[0].steps.map(
                (step) => (
                  <li key={step.number}>{step.step}</li>
                )
              )
            ) : (
              <p>Loading...</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
