const Item = ({ item, handleOnClick, className }) => {
  return <li className={`list-group-item ${className} `}>
    {item}
    <button className="btn btn-primary float-end " onClick={handleOnClick}>Buy</button>
  </li>
}
export default Item