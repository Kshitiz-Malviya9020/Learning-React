import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import ErrorMsg from "./components/ErrorMsg"
import TodoList from "./components/TodoList"
import todoItems from "./components/Data"
import TodoContainer from "./components/TodoContainer"
import './App.css'
function App() {
  return <>
    <center className='AppName'>
      <AppName />
    </center>
    <TodoContainer>
      <AddTodo  />
      <ErrorMsg todoList={todoItems} />
      <TodoList todoList={todoItems} />
    </TodoContainer>
  </>
}
export default App
