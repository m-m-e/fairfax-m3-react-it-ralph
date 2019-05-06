import React from 'react';
import logo from './jigsaw_logo.svg';
import logo_adalab from './logo-adalab.png';
import './App.scss';

class App extends React.Component {
  render() {
    const header = (
      <header className="landing__header">
        <img className="landing__img" src={logo} alt="Awesome profile-cards logo"/>
      </header>
    );
    const main = (
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
    const footer = (
      <div className="footer__page">
          <p className="footer__copyright">Awesome profile-cards @2018</p> 
          <a href="https://adalab.es/" target="_blank">
            <img src={logo_adalab} alt="logo de adalab" className="footer__image" />
          </a>
      </div>
    );
    const everything = (
      <div classNameName="page">
      <div classNameName="landing__page">
        {header}
        {main}
      </div>
        {footer}
    </div>
    );
    return everything;    
  }
}

export default App;
