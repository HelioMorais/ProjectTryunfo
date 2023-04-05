import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    image: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    rare: 'normal',
    trunfo: false,
    imgUrl: '',
    buttonDisabled: true,

  };

  handleChange = ({ target }) => {
    this.setState(() => ({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }), () => {
      const {
        name, description, attr1, attr2, attr3, image, rare,
      } = this.state;

      if (target.name === 'image') {
        fetch(`https://pokeapi.co/api/v2/pokemon/${image.toUpperCase()}`)
          .then((response) => response.json())
          .then((data) => this.setState({
            imgUrl: data.sprites.other['official-artwork'].front_default,
          }))
          .catch(() => this.setState((previousState) => previousState));
      }
      const valueTotal = 210;
      const maxAtt = 90;
      const oneTest = name && description && image && rare;
      const twoTest = parseInt(attr1, 10) + parseInt(attr2, 10)
          + parseInt(attr3, 10) <= valueTotal;
      const threeTest = attr1 <= maxAtt && attr2 <= maxAtt && attr3 <= maxAtt;
      const fourTest = attr1 >= 0 && attr2 >= 0 && attr3 >= 0;
      this.setState(() => ({
        buttonDisabled: !(oneTest && twoTest
          && threeTest && fourTest),
      }));
    });
  };

  render() {
    const {
      name, description, attr1, attr2, attr3, image, rare, trunfo,
      buttonDisabled, hasTrunfo, imgUrl } = this.state;
    return (
      <main>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ buttonDisabled }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imgUrl }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </main>

    );
  }
}

export default App;
