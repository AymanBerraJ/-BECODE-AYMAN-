import React from "react";

export default function Form({ filteredEmojis }) {

  return (
    <div>
      <h1>Liste des Emojis</h1>
      <ul>
        {filteredEmojis.length > 0 ? (
          filteredEmojis.map((item, index) => (
            <li key={index}>
              {item.title} - {item.symbol}
            </li>
          ))
        ) : (
          <li>Aucun résultat trouvé</li>
        )}
      </ul>
    </div>
  );
};
