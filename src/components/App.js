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
        tel:'',
        linkedin:'',
        github:'',
        palette: 1,
        isAvatarDefault: true,
        profile: {
          avatar: url
      }
    }
  }
    this.handleInput = this.handleInput.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  updateAvatar(img) {
    const { profile } = this.state;
    this.setState(prevState => {
      const newProfile = { ...profile, avatar: img };
      return {
        profile: newProfile,
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

  handleReset() {
    this.setState({
      card: {
        name:'',
        job:'',
        email:'',
        tel:'',
        linkedin:'',
        github:'',
        palette: 1,
        isAvatarDefault: true,
        profile: {
          avatar: url
        }
      }})
  }
   
  render() {
    const { isAvatarDefault, card } = this.state;
    return (
      <div className="App">
        <Card image={card.profile.avatar} card={card} handleColor={this.handleColor} handleInput={this.handleInput} avatar={card.profile.avatar}
          isAvatarDefault={isAvatarDefault}
          updateAvatar={this.updateAvatar}
          actionToReset={this.handleReset}/>
      </div>
    )
  }
}

export default App;
