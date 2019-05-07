import React from 'react';

class MainLanding extends React.Component {
  render() {
    return (
      <main className="landing__main">
        <div className="landing__title-container">
          <h1 className="landing__title">Crea tu tarjeta de visita</h1>
          <h2 className="landing__subtitle">Crea mejores contactos profesionales de forma fácil y cómoda</h2>
        </div>
        <div className="landing__icons">
            <ul className="icons__list">
                <li className="icons__list--item"> <i className="far fa-object-ungroup icons__item"></i>Diseña</li>
                <li className="icons__list--item"> <i className="far fa-keyboard icons__item"></i>Rellena</li>
                <li className="icons__list--item"> <i className="fas fa-share-alt icons__item"></i>Comparte</li>
            </ul>
        </div>
        <div className="landing__button"> <a href="main.html" title="Botón de comenzar" className="landing__button--link">Comenzar</a>
        </div>
      </main>
    );
  }
}

export default MainLanding;  
