import TodoItem from "./TodoItem";
const TodoList = ({ todoList, handleOnDelete }) => {
  return <>
    {todoList.map(item => (
      <TodoItem key={item.id} TodoID = {item.id} TodoName={item.name} TodoDate={item.date} handleOnDelete={handleOnDelete} />
    ))}
  </>
};
export default TodoList;
