import React, { useState } from 'react';
import './App.css';
import './globals.css';

function generateRandomNumber() {
  return Math.floor(Math.random() * 1000); // You can adjust the range as needed
}

function App() {
  const [randomNumbers, setRandomNumbers] = useState(Array.from({ length: 6 }, generateRandomNumber));

  const regenerateImages = () => {
    setRandomNumbers(Array.from({ length: 6 }, generateRandomNumber));
  };

  return (
    <>
     <h3 className='pad'>Random Images</h3>
      <div className="divvv">
       
        {randomNumbers.map((num, index) => (
          <img key={index} src={`https://picsum.photos/200?random=${num}`} alt={`${index + 1}`} />
        ))}
      </div>
      <button className="pad" onClick={regenerateImages}>Regenerate</button>
    </>
  );
}

export default App;
