import React from 'react';
import { Link } from 'react-router-dom';

class HeaderCard extends React.Component {
  render() {
    return(
      <header className="header__container">
        <h1 className="header">
          <Link to="/"><img src={this.props.logo} alt="page logo" className="header__logo" /></Link>          
        </h1>
      </header>
    );
  }
}
export default HeaderCard;