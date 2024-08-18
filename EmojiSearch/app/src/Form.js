import React, { useEffect, useState } from "react";

import emojiData from './json/emojis.json'; // Chemin relatif vers le fichier JSON

export default function Form({}) {

  



  return (
    <div>
      <h1>Liste des Emojis</h1>
      <ul>
        {emojiData.map((item, index) => (
          <li key={index}>
            {item.title} - {item.symbol}
          </li>
        ))}
      </ul>
    </div>
  );
};
