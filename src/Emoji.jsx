// Exercise 3.
import { useState } from "react";

function Emoji() {
    const [mood, setEmoji] = useState('😊')

    const handleChangeMood = () => {
        let newMood = '😊';
        if (mood === '😊') newMood = '🤤';

        setEmoji(newMood)
    }

    return (
        <div className="Emoji componentBox">
            <h2>Exercise 3</h2>
            Current Mood: {mood}
            <div>
                <button onClick={handleChangeMood}>Change Mood</button>
            </div>
        </div>
    )
}

export default Emoji
// Exercise 3 end.