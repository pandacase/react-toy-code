import styles from "./recipeinst.module.css"

export default function RecipeInst({ isLoaded, food }) {
  return (
    <div className={styles.recipeInst}>
      <ol>
        {isLoaded ? (
          food.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ol>
    </div>
  );
}
