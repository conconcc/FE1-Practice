import React, { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('Hello');

  const handleClick = () => {
    setWord(prev => prev === "hello" ? "bye" : "hello")
};

  return (
    <div>
      <div>{word}</div>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default App;