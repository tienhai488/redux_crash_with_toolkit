import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, onchangeValue } from "./TodoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.todos.formValue);
  const inputRef = useRef();
  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => dispatch(onchangeValue(e.target.value))}
        />
        <input
          type="submit"
          value="Add"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTodo(value));
            dispatch(onchangeValue(""));
          }}
        />
      </form>
    </div>
  );
};

export default TodoForm;
