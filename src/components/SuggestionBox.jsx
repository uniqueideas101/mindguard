
import React from "react";
import suggestions from "../utils/selfcaresuggestions";

export default function SuggestionBox({ mood }) {
  if (!mood || !suggestions[mood]) return null;

  return (
    <div>
      <h3>Suggestions for when you're feeling {mood}:</h3>
      <ul>
        {suggestions[mood].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
