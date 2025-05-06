import React, { useState } from "react";
import JournalEntry from "../components/journalentry";
import MoodAnalysis from "../components/moodanalysis";
import ResourceLinks from "../components/resourcelinks";
import styles from "./Home.module.css";
import SuggestionBox from "../components/suggestionbox"; 


export default function Home() {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("");
  const saveMood = () => {
    const today = new Date().toISOString().split('T')[0];
    const history = JSON.parse(localStorage.getItem('moodHistory')) || [];
  
    const existingEntryIndex = history.findIndex(entry => entry.date === today);
    const newMood = mood.toLowerCase();
  
    if (existingEntryIndex !== -1) {
      const entry = history[existingEntryIndex];
      if (!entry.moods.includes(newMood)) {
        entry.moods.push(newMood);
      }
    } else {
      history.push({ date: today, moods: [newMood] });
    }
  
    localStorage.setItem('moodHistory', JSON.stringify(history));
  };
  <button className={styles.saveButton} onClick={saveMood}>
  Save
</button>

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      // Simulate mood detection
      const lower = text.toLowerCase();
      if (lower.includes("happy")) setMood("Happy");
      else if (lower.includes("sad")) setMood("Sad");
      else if (lower.includes("anxious") || lower.includes("stressed")) setMood("Stressed");
      else setMood("Neutral");
    }
  };

  const handleSave = () => {
    if (text.trim()) {
      const existing = JSON.parse(localStorage.getItem("journalEntries")) || [];
      const newEntry = {
        text,
        mood, // must be set before saving
        date: new Date().toLocaleString()
      };      
      localStorage.setItem("journalEntries", JSON.stringify([...existing, newEntry]));
      alert("Entry saved to journal!");
      setText(""); // Optionally clear after saving
    }
  };

  return (
    <div className={styles.container}>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type how you're feeling..."
          rows={5}
        />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleSave} style={{ marginLeft: "1rem" }}>
          Save
        </button>
      </form>

      {mood && (
        <>
          <MoodAnalysis mood={mood} />
          <SuggestionBox mood={mood} />
        </>
      )}
    </div>
  );
}
