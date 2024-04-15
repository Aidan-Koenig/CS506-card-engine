import React from 'react';
import './App.css';
import Player from './components/Player';
import Table from './components/Table';
import Scoreboard from './components/Scoreboard';

function App() {
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
    <div className="App">

      <div className="container">
        <div className="first"></div>
        <div className="second" ><Player position="top"/></div>
        <div className="third"></div>
      </div>
      <div className="container2">
        <div className="first"><Player position="left"/></div>
        <div className="second2">
            <Table trump="Clubs" />
        </div>
        <div className="third"><Player position="rigth" /></div>
      </div>
      <div className="container">
        <div className="first"></div>
        <div className="second"><Player  position="bottom"/></div>
        <div className="third">
            <Scoreboard scores={scores} />
        </div>
      </div>

    </div>
  );
}


export default App;