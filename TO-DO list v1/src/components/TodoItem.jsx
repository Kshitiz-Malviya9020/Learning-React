
function TodoItem({TodoID, TodoName, TodoDate, handleOnDelete}) {

  return <>
    <div className="row kg-row">
      <div className="col-6 text-start">
        {TodoName}
      </div>
      <div className="col-4 text-start">
        {TodoDate}
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button" onClick={() => handleOnDelete(TodoID)}>Delete</button>
      </div>
    </div>
  </>
}
export default TodoItem;
