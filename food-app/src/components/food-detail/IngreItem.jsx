import styles from "./ingreitem.module.css"

export default function IngreItem({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.itemImg}>
          <img
            className={styles.image}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
            alt=""
          />
        </div>
        
        <div className={styles.itenInfo}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemAmout}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
