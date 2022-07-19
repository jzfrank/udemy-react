import { Fragment, useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string): void => {
    const newTodo = new Todo(text);
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeItemByID = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <Fragment>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveItem={removeItemByID} />
    </Fragment>
  );
}

export default App;
