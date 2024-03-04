import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../futures/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
