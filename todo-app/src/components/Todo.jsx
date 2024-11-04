import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Stats from "./Stats";

export default function Todo() {
  const initialToods =
    JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialToods);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const doneNum = todos.filter((todo) => todo.done).length;
  const totalNum = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Stats doneNum={doneNum} totalNum={totalNum} />
    </div>
  );
}
