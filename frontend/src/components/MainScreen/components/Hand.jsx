import React from 'react';
import './Hand.css';

//To-Do: Implement the tenth card components
// Import all card face SVGs
import ace_clubs from '../../../assets/cards/ace_clubs.svg';
import ace_diamonds from '../../../assets/cards/ace_diamonds.svg';
import ace_hearts from '../../../assets/cards/ace_hearts.svg';
import ace_spades from '../../../assets/cards/ace_spades.svg';
import jack_clubs from '../../../assets/cards/jack_clubs.svg';
import jack_diamonds from '../../../assets/cards/jack_diamonds.svg';
import jack_hearts from '../../../assets/cards/jack_hearts.svg';
import jack_spades from '../../../assets/cards/jack_spades.svg';
import king_clubs from '../../../assets/cards/king_clubs.svg';
import king_diamonds from '../../../assets/cards/king_diamonds.svg';
import king_hearts from '../../../assets/cards/king_hearts.svg';
import king_spades from '../../../assets/cards/king_spades.svg';
import nine_clubs from '../../../assets/cards/nine_clubs.svg';
import nine_diamonds from '../../../assets/cards/nine_diamonds.svg';
import nine_hearts from '../../../assets/cards/nine_hearts.svg';
import nine_spades from '../../../assets/cards/nine_spades.svg';
import queen_clubs from '../../../assets/cards/queen_clubs.svg';
import queen_diamonds from '../../../assets/cards/queen_diamonds.svg';
import queen_hearts from '../../../assets/cards/queen_hearts.svg';
import queen_spades from '../../../assets/cards/queen_spades.svg';
import ten_clubs from '../../../assets/cards/ten_clubs.svg';
import ten_diamonds from '../../../assets/cards/ten_diamonds.svg';
import ten_hearts from '../../../assets/cards/ten_hearts.svg';
import ten_spades from '../../../assets/cards/ten_spades.svg';

// Import card backside image
import card_backside from '../../../assets/cards/card_backside.svg';

function Hand({ playerName, cards = [], position }) {
  // Helper function to map card identifiers to their corresponding SVG imports
  const cardImages = {
    'ace_clubs': ace_clubs, 'ace_diamonds': ace_diamonds, 'ace_hearts': ace_hearts, 'ace_spades': ace_spades,
    'jack_clubs': jack_clubs, 'jack_diamonds': jack_diamonds, 'jack_hearts': jack_hearts, 'jack_spades': jack_spades,
    'king_clubs': king_clubs, 'king_diamonds': king_diamonds, 'king_hearts': king_hearts, 'king_spades': king_spades,
    'nine_clubs': nine_clubs, 'nine_diamonds': nine_diamonds, 'nine_hearts': nine_hearts, 'nine_spades': nine_spades,
    'queen_clubs': queen_clubs, 'queen_diamonds': queen_diamonds, 'queen_hearts': queen_hearts, 'queen_spades': queen_spades,
    'ten_clubs': ten_clubs, 'ten_diamonds':  ten_diamonds, 'ten_hearts': ten_hearts, 'ten_spades': ten_spades,
  };

  const isCurrentUser = position === 'bottom'; 
  const maxCardsToShow = 5;

  return (
    <div className={`Hand ${position}`}>
      {playerName && <h2 className="hand-name">{playerName}</h2>}
      <div className="hand-cards">
        {cards.slice(0, maxCardsToShow).map((card, index) => {
          const cardImageSrc = isCurrentUser ? cardImages[card] : card_backside;
          return (
            <img key={index} src={cardImageSrc} alt={isCurrentUser ? `${card}` : 'Card Back'} className="hand-card" />
          );
        })}
      </div>
    </div>
  );
}

export default Hand;