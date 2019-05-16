import React from 'react';
import logo from '../images/jigsaw_logo.svg';
import logo_adalab from '../images/logo_adalab';
import '../App.scss';
import Header from './Header';
import Footer from '../Footer';
import MainLanding from './MainLanding';

class Home extends React.Component {
  render() {
    const everything = (
      <div className="page">
      <div className="landing__page">
        <Header logo={logo} />
        <MainLanding />
      </div>
        <Footer logo_adalab={logo_adalab} />
    </div>
    );
    return everything;    
  }
}

export default Home;
