import React from 'react';

class HeaderCard extends React.Component {
  render() {
    return(
      <header className="header__container">
        <h1 className="header">
          <img src={this.props.logo} alt="page logo" className="header__logo" />
        </h1>
      </header>
    );
  }
}
export default HeaderCard;