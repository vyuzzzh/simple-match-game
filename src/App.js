import React, { useState, useEffect } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAdjust, faAllergies, faAngry, faAnchor,
  faArchway, faAtom, faAsterisk, faBowlingBall, faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import CardCollection from './components/CardCollection/CardCollection';
import StatusGame from './components/StatusGame/StatusGame';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import { initializeDeck } from './utils/Helper';

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [miss, setMiss] = useState(0);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    setCards(initializeDeck());
  }, []);

  const sameCardClicked = (id) => flipped.includes(id);
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.icon === clickedCard.icon;
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const resetGame = () => {
    setCards(initializeDeck());
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
    setMiss(0);
    setEndGame(false);
  };

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return setDisabled(false);
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        if (solved.length + 2 === cards.length) {
          return setEndGame(true);
        }
        resetCards();
      } else {
        setMiss(miss + 1);
        return setTimeout(resetCards, 1000);
      }
    }
  };

  library.add(faAdjust, faAllergies, faAngry, faAnchor,
    faArchway, faAtom, faAsterisk, faBowlingBall, faQuestion);

  return (
    <div className="App">
      <StatusGame
        endGame={endGame}
        resetGame={resetGame}
      />
      <ScoreBoard miss={miss} />
      <CardCollection
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </div>
  );
};

export default App;
