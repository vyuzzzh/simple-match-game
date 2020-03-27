import React from 'react';
import PropTypes from 'prop-types';
import './RestartButton.css';

const RestartButton = ({
  resetGame,
}) => (
  <button className="btn restart" type="button" onClick={resetGame}>Restart</button>
);

RestartButton.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

export default RestartButton;
