import React from "react";
import styles from "../pages/About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.heading}>About MindGuard</h1>

      <p>
        <strong>MindGuard</strong> is your personal companion for emotional wellness and reflection.
        Built with empathy and purpose, MindGuard helps you track your feelings, understand your emotional
        patterns, and receive gentle suggestions to support your mental health.
      </p>

      <h2 className={styles.subheading}> What It Does</h2>
      <ul>
        <li><strong>Journal Your Thoughts</strong> – Write down how you're feeling, anytime.</li>
        <li><strong>Mood Detection</strong> – Smart sentiment analysis detects your mood from what you write.</li>
        <li><strong>Mood-Based Interface</strong> – The interface responds to your mood, creating a calming and personalized space.</li>
        <li><strong>Self-Care Suggestions</strong> – Get curated tips, activities, or resources based on how you're feeling.</li>
        <li><strong>Saved Entries</strong> – Store and revisit past reflections in your Journal section.</li>
      </ul>

      <h2 className={styles.subheading}> How It Works</h2>
      <p>
        MindGuard uses a simulated AI sentiment analysis tool to recognize common emotional cues in your journal entries.
        It's not a clinical tool, but rather a reflective assistant that helps you observe patterns over time.
      </p>

      <h2 className={styles.subheading}> Why It Matters</h2>
      <p>
        Mental health matters — and self-awareness is the first step toward self-care.
        MindGuard encourages users to check in with themselves regularly and offers light, helpful support in return.
      </p>

      <h2 className={styles.subheading}> Built With</h2>
      <ul>
        <li> React (with hooks & routing)</li>
        <li> CSS Modules for styling</li>
        <li> Mock AI logic for mood detection</li>
        <li> LocalStorage for saving your entries</li>
        <li> Framer Motion for animations</li>
      </ul>

      <p className={styles.footerNote}>
        MindGuard is a passion project demonstrating how tech can be used <strong>for good</strong> — prioritizing mindfulness and care over metrics and noise.
      </p>
    </div>
  );
}
