import TodoItem from "./TodoItem";
import { useContext } from "react";
import { todoItemsStore } from "../store/todoItemsStore";

const TodoList = () => {
  const { todos, deleteTodo } = useContext(todoItemsStore);
  // const todoList = contextObj.todos
  return <>
    {todos.map(item => (
      <TodoItem key={item.id} TodoID = {item.id} TodoName={item.name} TodoDate={item.date} handleOnDelete={deleteTodo} />
    ))}
  </>
};
export default TodoList;
