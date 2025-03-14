import React, { useState } from 'react';

function YambSheet({ roundResults, updateRoundResult, diceValues }) {
  // Definiramo kategorije za Yamb listić
  const categories = [
    { name: "Ones", value: null },
    { name: "Twos", value: null },
    { name: "Threes", value: null },
    { name: "Fours", value: null },
    { name: "Fives", value: null },
    { name: "Sixes", value: null },
    { name: "Full House", value: null },
    { name: "Yamb", value: null },
    { name: "Max", value: null },
    { name: "Min", value: null },
    { name: "Scale", value: null },
    { name: "Poker", value: null },
    { name: "Total digits top-bottom", value: null },
    { name: "Total digits bottom-top", value: null },
    { name: "Total digits random chronology", value: null },
    { name: "Total digits announcement", value: null },
    { name: "Total all digits ", value: null },
    { name: "Total max-min top-bottom", value: null },
    { name: "Total max-min bottom-top", value: null },
    { name: "Total max-min random chronology", value: null },
    { name: "Total max-min announcement", value: null },
    { name: "Total all max-min", value: null },
    { name: "Total yamb-skala-poker-full top-bottom", value: null },
    { name: "Total yamb-skala-poker-full bottom-top", value: null },
    { name: "Total yamb-skala-poker-full random chronology", value: null },
    { name: "Total yamb-skala-poker-full announcement", value: null },
    { name: "Total all yamb-skala-poker-full ", value: null },
    { name: "Total of all total ", value: null },
  ];

  const handleInputChange = (event) => {
    setCurrentResult(event.target.value);
  };

  const handleSaveResult = () => {
    if (currentResult) {
      updateRoundResult(currentResult); // Poziva funkciju iz App.js da spasi rezultat
      setCurrentResult(""); // Očisti polje nakon spremanja
    }
  };

  return (
    <div className="yamb-sheet">
      <h2>Unesite rezultat:</h2>
      <input
        type="number"
        value={currentResult}
        onChange={handleInputChange}
        placeholder="Unesite rezultat"
      />
      <button onClick={handleSaveResult}>Spremi rezultat</button>

      <div className="results">
        <h3>Rezultati:</h3>
        <ul>
          {roundResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default yambSheet;
