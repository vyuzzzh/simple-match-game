import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css';

const Card = ({
  handleClick, id, flipped, icon, disabled, solved,
}) => (
  <div
    className={
      `flip-container ${flipped || solved ? 'flipped' : ''} ${solved ? 'solved' : ''}`
      }
    onClick={() => (disabled ? null : handleClick(id))}
  >
    <div className="flipper">
      <FontAwesomeIcon
        className={
          flipped || solved ? 'front' : 'back'
          }
        icon={
          flipped || solved ? icon : 'question'
          }
        size="5x"
      />
    </div>
  </div>
);

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
};

export default Card;
