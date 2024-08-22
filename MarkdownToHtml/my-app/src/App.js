import "./App.css";
import React, { useState} from "react";
import marked from "marked";

function App() {

  const [text, setText] = useState('');

  function inputChange (event) {
    setText(event.target.value)
  }

  function createMark () {
    return {__html: marked(text)}
  }

  const  headingOne = () => {
    setText(`# ${text} `)
  }
  const  headingTwo = () => {
    setText(`## ${text} `)
  }
  const bold = () => {
    setText(`**${text}**`)
  }
  const italic = () => {
    setText(`*${text}*`)
  }
  const line = () => {
    setText(`${text}\n---\n`)
  }

  return (
  <div className="App">
    <header>
    <h1>Markdown to HTML Converter</h1>
    </header>
    <div>
      <textarea 
      value={text}
      onChange={inputChange}
      placeholder="Markdown..."
      />
      <div>
        <button onClick={headingOne}>Heading 1</button>
        <button onClick={headingTwo}>Heading 2</button>
        <button onClick={bold}>Bold</button>
        <button onClick={italic}>Italic</button>
        <button onClick={line}>Horizontal Line</button>
      </div>
      <div dangerouslySetInnerHTML={createMark()}></div>
    </div>
  </div>
  );
}

export default App;
