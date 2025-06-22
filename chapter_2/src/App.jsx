import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import foodItems from "./components/data";
function App() {
  // react Fragment <React.Fragment></React.Fragment> or <> </>
  return <>
    <h1 className="text-center">Healty Foods</h1>
    <ErrorMsg items={foodItems} />
    <FoodItems items={foodItems} />
  </>
}
export default App;
