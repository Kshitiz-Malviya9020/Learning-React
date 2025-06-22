import TodoItem from "./TodoItem";
const TodoList = ({ todoList }) => {
  return <>
    {todoList.map(item => (
      <TodoItem key={item.id} TodoName={item.name} TodoDate={item.date} />
    ))}
  </>
};
export default TodoList;
