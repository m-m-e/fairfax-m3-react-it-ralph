import React from 'react';
import Card from './card/Card';
import url from './card/defaultImage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        name: '',
        job: '',
        email: '',
        tel: '',
        linkedin: '',
        github: '',
        palette: 1,
        isAvatarDefault: true,
        profile: {
          avatar: url
      },
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStorage = this.handleStorage.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  updateAvatar(img) {
    const { profile } = this.state.card;
    this.setState(prevState => {
      const newProfile = { ...profile, avatar: img };
      const newCard = { ...prevState.card, profile: newProfile, isAvatarDefault: false };
      return {
        card: newCard
      }
    });
  }

  handleColor(event) {
    const value = parseInt(event.currentTarget.value);
    this.setState((prevState) => {
      const newPalette = { ...prevState.card, palette: value };
      this.handleStorage(newPalette);
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
      const newCard = { ...prevState.card, [key]: value };
      this.handleStorage(newCard);
      return ({
        card: newCard
      });
    });
  }

  handleReset() {
    const defaultCard = {
      name: '',
      job: '',
      email: '',
      tel: '',
      linkedin: '',
      github: '',
      palette: 1,
      isAvatarDefault: true,
      profile: {
        avatar: url
      }
    };
    this.handleStorage(defaultCard)
    this.setState({
      card: defaultCard
    })
  }

  handleStorage(data) {
    localStorage.setItem('card', JSON.stringify(data));
  }
  getData() {
    const newData = JSON.parse(localStorage.getItem('card'));
    console.log(newData);
    if (newData !== null ) {
      this.setState(prevState => {
        return {
          card: newData
        }
      })
    }
  }
  render() {
    const { card } = this.state;
    return (
      <div className="App">
        <Card
          image={card.profile.avatar}
          card={card}
          handleColor={this.handleColor}
          handleInput={this.handleInput}
          avatar={card.profile.avatar}
          isAvatarDefault={card.isAvatarDefault}
          updateAvatar={this.updateAvatar}
          actionToReset={this.handleReset}
          actionToStore={this.handleStorage}
        />
      </div>
    )
  }
}

export default App;
