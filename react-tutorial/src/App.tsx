import { useState } from 'react';

function Square() {
  // Typescript does not allow 'useState(null)'.
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue(value === 'X' ? null : 'X');
  }
  

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}