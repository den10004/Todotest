import "./App.css";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="wrapper">
      <h1>Список задач</h1>
      <Form />
      <div className="todoblock">
        {todos.length < 1 ? (
          <p>Нет задач</p>
        ) : (
          todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
}

export default App;
