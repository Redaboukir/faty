import React, { useEffect, useState } from "react";
import './Timer.css';  // Cela doit être en haut de ton fichier Timer.jsx
 // Assure-toi d'importer le fichier CSS

const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    const dateOfMeeting = new Date("2025-01-12T00:00:00");
    
    const updateTimer = () => {
      const now = new Date();
      const diff = now - dateOfMeeting;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const months = Math.floor(days / 30); // Approximation du mois
      const years = Math.floor(months / 12);

      setTimeElapsed(`${years} years, ${months % 12} months, ${days % 30} days`);
    };

    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <h1 className="timer-header">Depuis notre rencontre...</h1>
      <div className="timer">
        <span>{timeElapsed}</span>
      </div>
      <p className="date">Depuis le <span>12 janvier 2025</span></p>
      <a href="/menu">Retour au menu</a>
    </div>
  );
};

export default Timer;
