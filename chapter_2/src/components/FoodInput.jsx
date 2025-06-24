import React from 'react';

const FoodInput = ({ handleOnAdd }) => {
  let [inputValue, setInputValue] = React.useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();  // Prevent page reload
        if (inputValue.trim() === '') return; // Optional: prevent empty adds
        handleOnAdd(inputValue); // Call the function  with the input value
        setInputValue(''); // Clear the input field after submission
      }}
    >
      <div className="input-group mb-3">
        <input
          className="form-control shadow-none"
          type="text"
          placeholder="Add food item"
          aria-label="Add food item"
           value={inputValue}                           // ✅ controlled input
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default FoodInput;
