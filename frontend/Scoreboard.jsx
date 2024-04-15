import React from 'react';
import './Scoreboard.css';
import scoreboardImage from '../assets/images/figure_6.png'; 

const Scoreboard = ({ scores }) => {
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
      <div className="scoreboard-image-container">
        <img src={scoreboardImage} alt="Scoreboard" />
      </div>
    </div>
  );
};

export default Scoreboard;