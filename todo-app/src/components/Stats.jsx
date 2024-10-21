import styles from "./stats.module.css"

export default function Stats({ doneNum, totalNum }) {
  return (
    <div className={styles.stats}>
      <span className={styles.item}>Completed Todos : {doneNum}</span>
      <span className={styles.item}>Total Todos : {totalNum}</span>
    </div>
  );
}
