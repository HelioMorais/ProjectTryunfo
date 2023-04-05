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
    trunfo: true,
  };

  handleChange = ({ target }) => {
    this.setState(() => ({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
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
