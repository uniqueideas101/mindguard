export default function analyzeMood(text) {
  const lower = text.toLowerCase();

  if (lower.includes("happy") || lower.includes("joy") || lower.includes("excited")) {
    return "Happy";
  } else if (lower.includes("sad") || lower.includes("down") || lower.includes("depressed")) {
    return "Sad";
  } else if (lower.includes("anxious") || lower.includes("worried") || lower.includes("nervous")) {
    return "Anxious";
  } else if (lower.includes("angry") || lower.includes("mad") || lower.includes("frustrated")) {
    return "Angry";
  } else if (lower.includes("tired") || lower.includes("exhausted") || lower.includes("sleepy")) {
    return "Tired";
  } else if (lower.includes("stressed") || lower.includes("overwhelmed")) {
    return "Stressed";
  }

  return "Neutral";
}
