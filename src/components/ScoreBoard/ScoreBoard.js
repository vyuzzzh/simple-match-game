import React from 'react';
import PropTypes from 'prop-types';
import './ScoreBoard.css';

const ScoreBoard = ({
  miss,
}) => (
  <div className="score">
    Errors already made:
    {' '}
    {miss}
  </div>
);

ScoreBoard.propTypes = {
  miss: PropTypes.number.isRequired,
};

export default ScoreBoard;
