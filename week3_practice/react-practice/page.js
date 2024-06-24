import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('초기 텍스트');

  const handleClick = () => {
    setText('변경된 텍스트');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>텍스트 변경</button>
    </div>
  );
}

export default App;
