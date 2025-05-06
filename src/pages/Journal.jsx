import React, { useEffect, useState } from "react";
import styles from "../pages/journal.module.css";

export default function Journal() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journalEntries"));
    if (saved) setEntries(saved);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Journal Entries</h2>
      {entries.length === 0 ? (
        <p className={styles.empty}>No saved entries yet.</p>
      ) : (
        <ul className={styles.entryList}>
          {entries.map((entry, idx) => (
            <li key={idx} className={styles.entry}>
              <div className={styles.date}>{entry.date}</div>
              <div className={styles.text}>{entry.text}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
