import { useDispatch } from "react-redux";
import { toggleCompletedTodo, removeTodo } from "../../futures/todo/todoSlice";
import "./todoItem.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todoitem" onClick={() => toggleTodoHandler(todo.id)}>
      <button className="standartBtn btnComplete">Зевершено</button>
      <div className={`todocard ${todo.completed ? "textThrough" : ""}`}>
        {todo.text}
      </div>
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
