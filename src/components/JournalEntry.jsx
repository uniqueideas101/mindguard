import React, { useState } from "react";
import styles from "./journalentry.module.css";
import analyzeSentiment from "../utils/sentimentAnalyzer";

export default function JournalEntry({ setMood }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const mood = analyzeSentiment(text);
    setMood(mood);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Daily Check-In</h2>
      <textarea
        placeholder="How are you feeling today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
