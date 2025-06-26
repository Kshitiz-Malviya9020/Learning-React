import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import ErrorMsg from "./components/ErrorMsg"
import TodoList from "./components/TodoList"
import { todoItemsStore } from "./store/todoItemsStore"
import TodoContainer from "./components/TodoContainer"
import { useState, useReducer } from 'react'
import './App.css'

function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useReducer((prevTodos, action) => {
    let newTodos = prevTodos
    if (action.type === 'NEW_ITEM') {
      newTodos = [...prevTodos,{id:todos.Lenght+1,name:action.payload.name, data: action.payload.date}]
    } else if (action.type === 'DELETE_ITEM') {
    }
    return newTodos;
  }, []);
  let addTodo = (task, date) => {
    const newItemAction = {
      type: 'NEW_ITEM',
      payload: {
        task,
        date
      }
    }
    setTodos(newItemAction)

    // setTodos((prevTodos) => [...prevTodos, {
    //   id: todos.length + 1,
    //   name: task,
    //   date: date,
    // }]);
  }
  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  return <>
    <todoItemsStore.Provider value={{ todos, addTodo, deleteTodo }}>
      <AppName />
      <TodoContainer>
        <AddTodo />
        <ErrorMsg />
        <TodoList />
      </TodoContainer>
    </todoItemsStore.Provider>
  </>
}
export default App