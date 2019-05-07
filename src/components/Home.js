import React from 'react';
import logo from '../images/jigsaw_logo.svg';
import logo_adalab from '../images/logo-adalab.png';
import '../App.scss';
import Header from './Header';
import Footer from './Footer';

class Home extends React.Component {
  render() {
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
   
    const everything = (
      <div className="page">
      <div className="landing__page">
        <Header logo={logo} />
        {main}
      </div>
        <Footer logo_adalab={logo_adalab} />
    </div>
    );
    return everything;    
  }
}

export default Home;
