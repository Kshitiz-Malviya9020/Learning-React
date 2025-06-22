
function ErrorMsg({todoList}) {
  return <>
  {todoList.length === 0 ? <p>No tasks available</p> : null}
  </>
}
export default ErrorMsg
