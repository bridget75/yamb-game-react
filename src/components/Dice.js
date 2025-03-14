import React from 'react';

function Dice({ value }) {
  console.log('Rendering dice with value:', value); // Ovdje provjeravamo dolazi li vrijednost
  return (
    <div className="dice">
      {value}
    </div>
  );
}

export default Dice;