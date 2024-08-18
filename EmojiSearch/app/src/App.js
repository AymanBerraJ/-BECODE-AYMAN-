import React, {useState} from 'react';
import Form from './Form';
// import ResponseSearch from './ResponseSearch';

function App() {

  const [newSearch, setNewSearch] = useState('');
  const [searchs, setSearch] = useState([]);

  function addEmoji() {
    if(!newSearch){
      alert('Enter a Value');
    };

    const search = {
      
    }

    setSearch((oldList) => [...oldList, search]);
    setNewSearch('');

  }

  return (
    <div className="App">
      <header>
    <h1>EmoJi SearCH</h1>
      </header>

      <Form newSearch={newSearch} setNewSearch={setNewSearch} addEmoji={addEmoji} />
      {/* <ResponseSearch /> */}


    </div>
  );
}

export default App;
