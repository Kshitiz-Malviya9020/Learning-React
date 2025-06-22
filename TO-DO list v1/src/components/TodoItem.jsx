
function TodoItem(props) {

  return <>
    <div className="row kg-row">
      <div className="col-6 text-start">
        {props.TodoName}
      </div>
      <div className="col-4 text-start">
        {props.TodoDate}
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button">Delete</button>
      </div>
    </div>
  </>
}

export default TodoItem
