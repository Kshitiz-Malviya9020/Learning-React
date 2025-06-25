import {useState} from 'react';
import Calculator from './components/Calculator';
import Buttons from './components/Buttons'
import Screen from './components/Screen';
const App = () => {
  let [value, setValue] = useState([]);
  const handleOnClick = (btnValue) => {
    if (btnValue === '=') {
      try {
        // Evaluate the expression and update the value
        const expression = value.join('');
        setValue([eval(expression)]);
      } catch (error) {
        console.error('Error evaluating expression:', error);
        setValue(['Error']);
      }
    }else if (btnValue === 'C') {
      // Clear the value
      setValue([]);
    }else {
      setValue([...value, btnValue]);
    }
  };

  return (
      <Calculator>
        <Screen value={value} />
        <Buttons handleOnClick={handleOnClick} />
      </Calculator>
  );
};

export default App;