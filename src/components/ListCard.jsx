import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function ListCard(props) {
  const { cardDeck, deleteCard } = props;

  return (
    <div>
      {cardDeck.map((card, index) => (
        <Card
          key={ index }
          cardName={ card.name }
          cardDescription={ card.description }
          cardAttr1={ card.attr1 }
          cardAttr2={ card.attr2 }
          cardAttr3={ card.attr3 }
          cardImage={ card.image }
          cardRare={ card.rare }
          cardTrunfo={ card.trunfo }
        />
      ))}

      <button
        type="button"
        onClick={ deleteCard }
        data-testid="delete-button"
      >
        Excluir
      </button>
    </div>
  );
}

ListCard.propTypes = {
  cardDeck: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default ListCard;
