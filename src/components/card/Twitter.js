import React from 'react';

class Twitter extends React.Component {
  render() {
    const {cardURL}=this.props;

    return (
  
      <div className={`twitter__container ${this.props.showTwitter === false ? "hidden ": " " }` }>
        <h2 className="twitter__container--text">La tarjeta ha sido creada</h2>
        <a href={cardURL} className="twitter__container--link">{cardURL}</a>
        <a className="twitter__container--btn" href={`http://twitter.com/share?text=¿Quieres conocer mi perfil profesional? ¡Aquí tienes mi tarjeta digital! 🙌 &url=${cardURL}`}
        >
          <i className="fab fa-twitter twitter__icon"></i> Compartir en twitter
        </a>
      </div>
    );
  }
}
export default Twitter; 
