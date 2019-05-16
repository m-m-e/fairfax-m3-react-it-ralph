import React from 'react';
import Card from './card/Card';
import url from './card/defaultImage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
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
    this.setState({ palette: value });
  }
  handleInput(event) {
    const currentField = event.currentTarget;
    const key = currentField.id;
    const value = currentField.value;
    const newValue = {};
    newValue[key] = value;

    console.log(newValue);
    this.setState(newValue);
  }
  render() {
    const { profile, isAvatarDefault } = this.state;
    return (
      <div className="App">
        <Card url={url} state={this.state} handleColor={this.handleColor} handleInput={this.handleInput} avatar={profile.avatar}
          isAvatarDefault={isAvatarDefault}
          updateAvatar={this.updateAvatar}/>
      </div>
    )
  }
}

export default App;
