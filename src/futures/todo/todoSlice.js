import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("todo") !== null
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

const initialState = {
  todos: items,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    EditTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, toggleCompletedTodo, removeTodo, EditTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
