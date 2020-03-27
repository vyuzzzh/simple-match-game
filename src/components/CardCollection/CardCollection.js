import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardCollection.css';

const CardCollection = ({
  cards, flipped, handleClick, disabled, solved,
}) => (
  <div className="collection">
    {
      cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          icon={card.icon}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
        />
      ))
    }
  </div>
);

CardCollection.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CardCollection;
