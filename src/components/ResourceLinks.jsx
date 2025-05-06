import React from "react";
import selfCareSuggestions from "../utils/selfcaresuggestions";


export default function ResourceLinks({ mood }) {
  const links = suggestions[mood] || [];

  return (
    <div>
      <h3>Self-Care Resources</h3>
      <ul>
        {links.map((link, i) => (
          <li key={i}><a href={link.url} target="_blank" rel="noreferrer">{link.title}</a></li>
        ))}
      </ul>
    </div>
  );
}