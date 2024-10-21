import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({
    name: "",
    done: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.length > 0) setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form
      className={styles.todoform}
      onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo.name}
          onChange={(e) =>
            setTodo({ name: e.target.value, done: false })
          }
          placeholder="Enter new todo item..."
        />
        <button className={styles.modernBtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
