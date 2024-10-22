import styles from "./recipeinfo.module.css"

export default function RecipeInfo({ food }) {
  return (
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
  );
}
