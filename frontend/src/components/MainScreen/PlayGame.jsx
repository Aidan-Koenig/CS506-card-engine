//To-Do:Check out the main, and add the code to that branch.
//To-Do: Correct the passing of the cards.
import { useEffect, useState } from 'react';
import './PlayGame.css';
import Player from './components/Hand';
import Table from './components/Table';
import Scoreboard from './components/Scoreboard';

function PlayGame({ closeModal, openPlayGameModal }) {
  const players = {
    left: { name: "Scott S.", cards: ['10♣', 'J♣', 'Q♣'] },
    top: { name: "CPU James", cards: ['10♦', 'J♦', 'Q♦'] },
    right: { name: "Bucky B.", cards: ['10♥', 'J♥', 'Q♥'] },
    bottom: { name: "You", cards: ['10♠', 'J♠', 'Q♠'] }
  };
  
  const scores = [
    { team: 'You & CPU James', score: 1 },
    { team: 'Scott S. & Bucky B.', score: 0 }
  ];
  
  return (
      <>
          <div className="container">
              <div className="first"> </div>
              <div className="second" ><Player playerName="Top" cards={["*","*","*","*"]} position="top"/></div>
              <div className="third"> </div>
          </div>
          <div className="container2">
              <div className="first"><Player playerName="Left" cards={["*","*","*","*"]} position="left"/></div>
              <div className="second2">
                  <Table trump="Clubs"  cards={["ace_clubs","nine_diamonds","queen_hearts","ten_spades"]}  />
              </div>
              <div className="third"><Player playerName="Right" cards={["*","*","*","*"]} position="right" /></div>
          </div>
          <div className="container">
              <div className="first"> </div>
              <div className="second"><Player playerName="You" cards={["ace_clubs","nine_diamonds","queen_hearts","ten_spades"]}  position="bottom"/></div>
              <div className="third">
                  <Scoreboard scores={scores} />
              </div>
          </div>
      </>
  );
}

export default PlayGame;