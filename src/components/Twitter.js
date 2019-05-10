import React from 'react';

class Twitter extends React.Component {
  render() {
    return (
      <div className="twitter__container hidden">
        <h2 className="twitter__container--text">La tarjeta ha sido creada</h2>
        <a href="twitter_anchor" className="twitter__container--link">#</a>
        <button className="twitter__container--btn">
          <i className="fab fa-twitter twitter__icon"></i> Compartir en twitter
        </button>
      </div>
    );
  }
}
export default Twitter; 