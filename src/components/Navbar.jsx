import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MindGuard</div>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/journal" className={styles.link}>Journal</Link>
        <Link to="/about" className={styles.link}>About</Link>
      </div>
    </nav>
  );
}
