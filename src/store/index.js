import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../components/TodoSlice";

const store = configureStore({
  reducer: {
    todos: TodoSlice,
  },
});

export default store;
