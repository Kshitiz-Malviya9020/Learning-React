import React from 'react'

const Button = ({ btnValue, handleOnClick }) => {
  let colClass = "col-3";
  let btnClass = "btn btn-light w-100 py-3 fs-5 fw-bold";

  if (btnValue === '=') {
    colClass = "col-12";
    btnClass = "btn btn-success w-100 py-3 fs-5 fw-bold";
  } else if (btnValue === 'C') {
    colClass = "col-3";
    btnClass = "btn btn-danger w-100 py-3 fs-5 fw-bold";
  } else if (['/', '*', '-', '+'].includes(btnValue)) {
    btnClass = "btn btn-secondary w-100 py-3 fs-5 fw-bold";
  }

  return (
    <div className={colClass}>
      <button
        type="button"
        className={btnClass}
        onClick={() => handleOnClick(btnValue)}
      >
        {btnValue}
      </button>
    </div>
  );
}

export default Button
