import { useState } from "react";

function MoodChanger() {
    const [mood, setMood] = useState('happy');

    const handleWinLotto = () => {
        setMood('ecstatic')
    }

    const handleRunningLate = () => {
        let newMood = 'stressed';
        if (mood === 'stressed') newMood = 'really stressed';
        else if (mood === 'really stressed') newMood = 'giving up';

        setMood(newMood)
    }

    return (
      <div className="MoodChanger componentBox">
        Current Mood: {mood}
        <div>
          <button onClick={() => setMood("tired")}>Stay Up Late</button>
          <button onClick={() => setMood("hungry")}>Skip Lunch</button>
          <button onClick={() => setMood("lathargic")}>Over Sleep</button>
          <button onClick={handleWinLotto}>Win Lotto</button>
          <button onClick={handleRunningLate}>Running Late</button>
        </div>
      </div>
    );
}

export default MoodChanger