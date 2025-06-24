import {useState} from "react";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import foodList from "./components/data";
function App() {
  // react Fragment <React.Fragment></React.Fragment> or <> </>
  let [foodItems, setFoodItems] = useState(foodList);
  const handleOnAdd = (inputValue) => {
    setFoodItems([...foodItems, inputValue]);
    // Do not mutate the imported foodList array
  }
  return <Container>
    <h1 className="text-center">Healty Foods</h1>
    <FoodInput handleOnAdd = {handleOnAdd} />
    <ErrorMsg items={foodItems} />
    <FoodItems items={foodItems} />
    </Container>
}
export default App;
