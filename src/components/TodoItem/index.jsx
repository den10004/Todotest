import { useDispatch } from "react-redux";
import {
  toggleCompletedTodo,
  removeTodo,
  EditTodo,
} from "../../futures/todo/todoSlice";
import "./todoItem.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const EditTodoHandler = (id) => {
    dispatch(EditTodo(id));
  };

  return (
    <div className="todoitem">
      <button
        className="standartBtn btnComplete"
        onClick={() => toggleTodoHandler(todo.id)}
      >
        Зевершено
      </button>
      <div className={`todocard ${todo.completed ? "textThrough" : ""}`}>
        {todo.text}
      </div>
      <button onClick={() => EditTodoHandler(todo.id)}>Edit</button>
      <button
        className="standartBtn btnDelete"
        onClick={() => removeTodoHandler(todo.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default TodoItem;
