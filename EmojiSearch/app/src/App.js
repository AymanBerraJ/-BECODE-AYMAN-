import React, { useState } from 'react';
import Form from './Form';
import ReactDOM from 'react-dom/client';
// import './App.scss'; 
import InputSearch from './InputSearch';
import emojiData from './json/emojis.json'; // Importer les emojis

function App() {
  const [filteredEmojis, setFilteredEmojis] = useState(emojiData); // Initialiser avec tous les emojis

  return (
    <div className="App">
      <header>
        <h1>EmoJi SearCH</h1>
      </header>
      <InputSearch setFilteredEmojis={setFilteredEmojis} />
      <Form filteredEmojis={filteredEmojis} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
