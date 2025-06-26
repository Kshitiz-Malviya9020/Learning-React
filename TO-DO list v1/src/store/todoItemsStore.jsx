import { createContext } from "react"

export const todoItemsStore = createContext({
  todos: {},
  addTodo: () => {},
  deleteTodo: () => {},
});