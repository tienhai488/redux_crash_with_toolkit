import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import { deleteTodo, setCompleted } from "./TodoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li className={todo.completed ? "completed" : ""} key={todo.id}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(setCompleted(todo))}
            />
            <button onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
