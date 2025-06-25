import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import ErrorMsg from "./components/ErrorMsg"
import TodoList from "./components/TodoList"
import todoItems from "./components/Data"
import TodoContainer from "./components/TodoContainer"
import {useState} from 'react'
import './App.css'
function App() {
  const [todos, setTodos] = useState(todoItems);
  let handleOnAdd = (task, date) => {
   let newTodo = {
      id: todos.length + 1,
      name: task,
      date: date,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }
  let handleOnDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  return <>
    <AppName />
    <TodoContainer>
      <AddTodo handleOnAdd={handleOnAdd} />
      <ErrorMsg todoList={todos} />
      <TodoList todoList={todos} handleOnDelete={handleOnDelete} />
    </TodoContainer>
  </>
}
export default App
