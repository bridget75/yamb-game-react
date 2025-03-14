import React, { useState } from 'react';

function yambSheet({ roundResults, updateRoundResult }) {
  // State za spremanje rezultata
  const [currentResult, setCurrentResult] = useState("");

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
