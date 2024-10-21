import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const newList = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {newList.map((todo) => (
        <TodoItem
          key={todo.name}
          item={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
