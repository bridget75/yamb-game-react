import React, { useState } from 'react';
import './App.css';
import Dice from './components/Dice';

function App() {
  const [numberOfDice, setNumberOfDice] = useState(6);
  const [diceValues, setDiceValues] = useState(Array(6).fill(1));

  // Funkcija za promjenu broja kockica putem toggle-a
  const handleToggleChange = (event) => {
    const newNumber = Number(event.target.value);
    setNumberOfDice(newNumber);
    setDiceValues(Array(newNumber).fill(1)); // Ovdje odmah ažuriramo diceValues
  };

  // Funkcija za bacanje kockica (random value)
  const rollDice = () => {
    setDiceValues(diceValues.map(() => Math.floor(Math.random() * 6) + 1));
  };

  return (
    <div className="App">
      <h1>Yamb Game</h1>
      <p>Početak Yamb aplikacije!</p>

      <div>
        <label>
          Odaberi broj kockica:
          <div>
            <label>
              <input 
                type="radio"
                name="diceCount"
                value="5"
                checked={numberOfDice === 5}
                onChange={handleToggleChange}
              />
              5 kockica
            </label>
            <label>
              <input
                type="radio"
                name="diceCount"
                value="6"
                checked={numberOfDice === 6}
                onChange={handleToggleChange}
              />
              6 kockica
            </label>
          </div>
        </label>
      </div>

      <button onClick={rollDice}>Baci kockice</button>

      <div className="dice-container">
        {diceValues.map((value, index) => (
          <Dice key={index} value={value} />
        ))}
      </div>
    </div>
  );
}

export default App;
