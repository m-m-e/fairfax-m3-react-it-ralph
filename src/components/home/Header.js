import React from 'react';

class Header extends React.Component {
  render() {
    const {logo} = this.props;
    return (
      <header className="landing__header">
        <img className="landing__img" src={logo} alt="Awesome profile-cards logo"/>
      </header>
    )
  }
};

export default Header;