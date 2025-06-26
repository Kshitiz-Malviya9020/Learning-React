import { IoAddCircleSharp } from "react-icons/io5";
import { useContext } from "react";
import { todoItemsStore } from "../store/todoItemsStore";

function AddTodo() {
  const {addTodo} = useContext(todoItemsStore)
  return <>
    <form onSubmit={(e) => {
      e.preventDefault();
      addTodo(e.target[0].value, e.target[1].value);
      e.target[0].value = '';
      e.target[1].value = '';
    }
    }>
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder='Enter todo here...' required />
        </div>
        <div className="col-4">
          <input type="date" required />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button"><IoAddCircleSharp /></button>
        </div>
      </div>
    </form>
  </>
}

export default AddTodo
