import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={food.image}
        alt="img"
      />
      <div className={styles.itenContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>

      <div className={styles.btnConatiner}>
        <button
          className={styles.itemBtn}
          onClick={() => setFoodId(food.id)}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
