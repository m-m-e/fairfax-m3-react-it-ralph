import React from 'react';

class Twitter extends React.Component {
  render() {
    console.log('hola')
    return (
  
      <div className={`twitter__container ${this.props.showTwitter === false ? "hidden ": " " }` }>
        <h2 className="twitter__container--text">La tarjeta ha sido creada</h2>
        <a href="twitter_anchor" className="twitter__container--link">#</a>
        <a className="twitter__container--btn" href="http://twitter.com/share?text=¿Quieres conocer mi perfil profesional? ¡Aquí tienes mi tarjeta digital! 🙌 &url=http://beta.adalab.es/fairfax-m3-react-it-ralph/#/&hashtags=tarjetadigital,reactitcard,adalabers"
        >
          <i className="fab fa-twitter twitter__icon"></i> Compartir en twitter
        </a>
      </div>
    );
  }
}
export default Twitter; 
