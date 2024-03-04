import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../futures/todo/todoSlice";
import { v4 } from "uuid";
import "./form.css";

const Form = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = React.useState("");

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };

    dispatch(addTodo(todo));
    setTodoValue("");
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Введите задачу"
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
      <button
        type="submit"
        className="standartBtn"
        onClick={() => addTodoHandler()}
        disabled={todoValue === ""}
      >
        Добавить
      </button>
    </form>
  );
};

export default Form;
