const { createSlice } = require("@reduxjs/toolkit");
const ID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: ID(),
        title: "todo1",
        completed: false,
      },
      {
        id: ID(),
        title: "todo2",
        completed: false,
      },
      {
        id: ID(),
        title: "todo3",
        completed: false,
      },
    ],
    formValue: "",
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: ID(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    setCompleted: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    },
    onchangeValue: (state, action) => {
      state.formValue = action.payload;
    },
  },
});

const { reducer, actions } = TodoSlice;
const { addTodo, deleteTodo, onchangeValue, setCompleted } = actions;
export { addTodo, deleteTodo, onchangeValue, setCompleted };
export default reducer;
