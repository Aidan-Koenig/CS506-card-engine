import React from 'react';
import './Player.css';

// Import all card face SVGs
import ace_clubs from '../assets/SVG/ace_clubs.svg';
import ace_diamonds from '../assets/SVG/ace_diamonds.svg';
import ace_hearts from '../assets/SVG/ace_hearts.svg';
import ace_spades from '../assets/SVG/ace_spades.svg';
import jack_clubs from '../assets/SVG/jack_clubs.svg';
import jack_diamonds from '../assets/SVG/jack_diamonds.svg';
import jack_hearts from '../assets/SVG/jack_hearts.svg';
import jack_spades from '../assets/SVG/jack_spades.svg';
import king_clubs from '../assets/SVG/king_clubs.svg';
import king_diamonds from '../assets/SVG/king_diamonds.svg';
import king_hearts from '../assets/SVG/king_hearts.svg';
import king_spades from '../assets/SVG/king_spades.svg';
import nine_clubs from '../assets/SVG/nine_clubs.svg';
import nine_diamonds from '../assets/SVG/nine_diamonds.svg';
import nine_hearts from '../assets/SVG/nine_hearts.svg';
import nine_spades from '../assets/SVG/nine_spades.svg';
import queen_clubs from '../assets/SVG/queen_clubs.svg';
import queen_diamonds from '../assets/SVG/queen_diamonds.svg';
import queen_hearts from '../assets/SVG/queen_hearts.svg';
import queen_spades from '../assets/SVG/queen_spades.svg';

// Import card backside image
import card_backside from '../assets/SVG/card_backside.svg';

function Player({ name, cards = [], position, isCpu = false }) {
  const cardOrientation = position;

  // Helper function to map card identifiers to their corresponding SVG imports
  const cardImages = {
    'ace_clubs': ace_clubs, 'ace_diamonds': ace_diamonds, 'ace_hearts': ace_hearts, 'ace_spades': ace_spades,
    'jack_clubs': jack_clubs, 'jack_diamonds': jack_diamonds, 'jack_hearts': jack_hearts, 'jack_spades': jack_spades,
    'king_clubs': king_clubs, 'king_diamonds': king_diamonds, 'king_hearts': king_hearts, 'king_spades': king_spades,
    'nine_clubs': nine_clubs, 'nine_diamonds': nine_diamonds, 'nine_hearts': nine_hearts, 'nine_spades': nine_spades,
    'queen_clubs': queen_clubs, 'queen_diamonds': queen_diamonds, 'queen_hearts': queen_hearts, 'queen_spades': queen_spades
  };

  return (
    <div className={`Player ${position}`}>
      <h2 className="player-name">{name}</h2>
      <div className={`cards ${cardOrientation}`}>
        {position === 'bottom' ?
          cards.slice(0, 4).map(card => (
            <img key={card} src={cardImages[card]} alt={card} />
          )) :
          Array.from({ length: 4 }).map((_, index) => (
            <img key={index} src={card_backside} alt="Card Back" />
          ))
        }
      </div>
    </div>
  );
}

export default Player;