import React, { useState } from "react";
import emojiData from './json/emojis.json'; // Chemin relatif vers le fichier JSON

export default function InputSearch({ setFilteredEmojis }) {
    const [newEmoji, setNewEmoji] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setNewEmoji(value);

        if (value) {
            const filtered = emojiData.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
            setFilteredEmojis(filtered);
        } else {
            setFilteredEmojis(emojiData); // Afficher tous les emojis si l'input est vide
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={newEmoji} 
                onChange={handleInputChange} 
                placeholder="Enter an emoji..." 
            />
        </div>
    );
}
