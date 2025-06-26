import { todoItemsStore } from "../store/todoItemsStore"
import { useContext } from 'react'
function ErrorMsg() {
  const { todos } = useContext(todoItemsStore)
  return <>
  {todos.length === 0 ? <p>No tasks available</p> : null}
  </>
}
export default ErrorMsg
