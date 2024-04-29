import React from 'react';
import './Table.css';

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

const cardImageSources = {
  'ace_clubs': ace_clubs,
  'ace_diamonds': ace_diamonds,
  'ace_hearts': ace_hearts,
  'ace_spades': ace_spades,
  'jack_clubs': jack_clubs,
  'jack_diamonds':jack_diamonds,
  'jack_spades': jack_spades,
  'jack_hearts': jack_hearts,
  'king_clubs': king_clubs,
  'king_diamonds': king_diamonds,
  'king_hearts': king_hearts,
  'king_spades': king_spades,
  'nine_clubs': nine_clubs,
  'nine_diamonds':nine_diamonds,
  'nine_hearts':nine_hearts,
  'nine_spades':nine_spades,
  'queen_clubs':queen_clubs,
  'queen_diamonds':queen_diamonds,
  'queen_hearts':queen_hearts,
  'queen_spades':queen_spades,
  'ten_clubs':ten_clubs,
  'ten_diamonds':ten_diamonds,
  'ten_hearts':ten_hearts,
  'ten_spades':ten_spades,
};

function Table({ cards }) {
  // Explicit check for both array existence and length before slicing
  const displayedCards = (cards && Array.isArray(cards)) ? cards.slice(0, 4) : [];

  return (
    <div className="Table">
      <div className="card-container">
        {displayedCards.map((card, index) => (
          <div key={index} className={`card ${index === 0 ? 'left' : index === 1 ? 'top' : index === 2 ? 'right' : 'bottom'}`}>
            <img src={cardImageSources[card]} alt={`${card} card`} className="table-card" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;