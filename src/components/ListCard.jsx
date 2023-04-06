import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListCard extends Component {
  render() {
    const { cardDeck } = this.props;
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
      </div>
    );
  }
}

ListCard.propTypes = {
  cardDeck: PropTypes.arrayOf().isRequired,
};

export default ListCard;
