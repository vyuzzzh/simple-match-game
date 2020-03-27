import React from 'react';
import PropTypes from 'prop-types';
import RestartButton from '../RestartButton/RestartButton';
import './StatusGame.css';

const EndGame = ({
  endGame, resetGame,
}) => (
  <div className="end">
    <p>
      {
        endGame ? 'The game is over. Try it again!' : 'Find all the matches!'
      }
    </p>
    {
      endGame && <RestartButton resetGame={resetGame} />
    }
  </div>
);

EndGame.propTypes = {
  endGame: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default EndGame;
