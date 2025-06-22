import React from 'react'

const btnList = [
  { id: 1, value: '7' },
  { id: 2, value: '8' },
  { id: 3, value: '9' },
  { id: 4, value: '/' },
  { id: 5, value: '4' },
  { id: 6, value: '5' },
  { id: 7, value: '6' },
  { id: 8, value: '*' },
  { id: 9, value: '1' },
  { id: 10, value: '2' },
  { id: 11, value: '3' },
  { id: 12, value: '-' },
  { id: 13, value: '0' },
  { id: 14, value: '.' },
  { id: 15, value: '=' },
  { id: 16, value: '+' }
]

const Buttons = () => (
  <div className="row g-2">
    {btnList.map(btn => (
      <div key={btn.id} className="col-3">
        <button
          className={`btn ${btn.value === '=' ? 'btn-success' : ['/', '*', '-', '+'].includes(btn.value) ? 'btn-secondary' : 'btn-light'} w-100 py-3 fs-5 fw-bold`}
          disabled
        >
          {btn.value}
        </button>
      </div>
    ))}
  </div>
)

export default Buttons
