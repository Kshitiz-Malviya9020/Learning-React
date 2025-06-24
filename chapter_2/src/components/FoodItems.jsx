import { useState } from 'react'
import Item from './Item';
const FoodItems = ({ items }) => {
  let [selectedItem, setSelectedItem] = useState([])
  let handleOnClick = (item) => {
    console.log(`Buying ${item}`);
    setSelectedItem([...selectedItem, item])
  }
  return (
    <ul className="list-group">
      {items.map(item => (
        <Item className={selectedItem.includes(item) ? 'bg-success bg-gradient' : null}
          item={item}
          handleOnClick={() => handleOnClick(item)}
          key={item}
        />

      ))}
    </ul>
  );
};
export default FoodItems;
