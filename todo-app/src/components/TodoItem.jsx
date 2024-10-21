import styles from "./todoitem.module.css";

export default function TodoItem({
  item,
  todos,
  setTodos,
}) {
  function handleDelete(name) {
    setTodos(todos.filter((todo) => todo.name !== name));
  }

  function handleCheckbox(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <input
          className={styles.itemCheckBox}
          type="checkbox"
          onChange={() => handleCheckbox(item.name)}
        />
        <span
          className={
            item.done
              ? styles.doneItemText
              : styles.itemText
          }>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(item.name)}>
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
