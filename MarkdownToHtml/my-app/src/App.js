import "./App.css";
import React, { useState } from "react";
import marked from "marked";

function App() {
  const [text, setText] = useState("");

  function inputChange(event) {
    setText(event.target.value);
  }

  function createMark() {
    return { __html: marked(text) };
  }

  const headingOne = () => {
    setText(`# ${text} `);
  };
  const headingTwo = () => {
    setText(`## ${text} `);
  };
  const bold = () => {
    setText(`**${text}**`);
  };
  const italic = () => {
    setText(`*${text}*`);
  };
  const line = () => {
    setText(`${text}\n---\n`);
  };

  return (
    <div className="App flex flex-col items-center p-8">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Markdown to HTML Converter
        </h1>
      </header>
      <div className="w-full max-w-3xl">
        <textarea
          value={text}
          onChange={inputChange}
          placeholder="Markdown..."
          className="w-full p-4 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="10"
        />
        <div className="flex space-x-2 mb-4">
          <button
            onClick={headingOne}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Heading 1
          </button>
          <button
            onClick={headingTwo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Heading 2
          </button>
          <button
            onClick={bold}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Bold
          </button>
          <button
            onClick={italic}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
          >
            Italic
          </button>
          <button
            onClick={line}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Horizontal Line
          </button>
        </div>
        <div
          className="p-4 border border-gray-300 rounded-md shadow-sm bg-white"
          dangerouslySetInnerHTML={createMark()}
        ></div>
      </div>
    </div>
  );
}

export default App;
