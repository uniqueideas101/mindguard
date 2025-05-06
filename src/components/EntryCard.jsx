import React from "react";
import styles from "./entrycard.module.css";

export default function EntryCard({ text, date }) {
  return (
    <div className={styles.card}>
      <p>{text}</p>
      <span>{date}</span>
    </div>
  );
}
