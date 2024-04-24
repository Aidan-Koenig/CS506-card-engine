import React from 'react';
import './Scoreboard.css';

const Scoreboard = () => {
  // Hardcoded scores for demonstration
  const scores = [
    { team: 'Team A', score: 5 },
    { team: 'Team B', score: 3 }
  ];

  return (
    <div className="scoreboard">
      <div className="scores-container">
        {scores.map((score, index) => (
          <div key={index} className="team-score">
            <span className="team-name">{score.team}</span>
            <span className="score">{score.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;