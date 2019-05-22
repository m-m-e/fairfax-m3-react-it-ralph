import React from 'react';
import Card from './card/Card';
import url from './card/defaultImage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        name:'',
        job:'',
        email:'',
        phone:'',
        linkedin:'',
        github:'',
        palette: 1,
        photo: url, 
      },
      isAvatarDefault: true,
  }
    this.handleInput = this.handleInput.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  updateAvatar(img) {
    this.setState(prevState => {
      const newCard = {...prevState.card, photo: img};
      return {
        card: newCard,
        isAvatarDefault: false
      }
    });
  }

  handleColor(event) {
    const value = parseInt(event.currentTarget.value);
    this.setState((prevState) => {
      const newPalette = {...prevState.card, palette:value};
      return ({
        card: newPalette
      });
    });
}
handleInput(event) {
    const currentField = event.currentTarget;
    const key = currentField.id;
    const value = currentField.value;
    this.setState((prevState) => {
      // []propiedad dinámica
      const newCard = {...prevState.card, [key]:value};
      return ({
        card: newCard
      });
    });
}

handleReset(){
  this.setState({
    card: {
      name:'',
      job:'',
      email:'',
      phone:'',
      linkedin:'',
      github:'',
      palette: 1,
      photo: url
    },
    isAvatarDefault: true,
  })
} 

  render() {
    const { card, isAvatarDefault } = this.state;
    return (
      <div className="App">
        <Card 
          card={card} 
          handleColor={this.handleColor} 
          handleInput={this.handleInput} 
          photo={card.photo}
          isAvatarDefault={isAvatarDefault}
          updateAvatar={this.updateAvatar}
          actionToReset={this.handleReset}
        />
      </div>
    )
  }
}

export default App;
