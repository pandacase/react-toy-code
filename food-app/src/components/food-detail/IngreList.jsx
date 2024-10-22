import IngreItem from "./IngreItem";
import styles from "./ingrelist.module.css"

export default function IngreList({ isLoaded, food}) {
  return (
    <div className={styles.recipeIngre}>
      {isLoaded ? (
        food.extendedIngredients.map((item) => (
          <IngreItem item={item} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
