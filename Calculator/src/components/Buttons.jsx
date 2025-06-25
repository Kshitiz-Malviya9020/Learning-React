import Button from "./Button"
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
  { id: 17, value: 'C' },
  { id: 16, value: '+' },
  { id: 15, value: '=' }
]

const Buttons = ({ handleOnClick }) => {
  return (
    <div className="row g-2">
      {btnList.map(btn => (
        <Button key={btn.id} btnValue={btn.value} handleOnClick={handleOnClick} />
      ))}
    </div>
  );
}

export default Buttons
