import React from 'react';

class Footer  extends React.Component {
  render() {
    const {logo_adalab} = this.props;
    
    return (
      <div className="footer__page">
          <p className="footer__copyright">Awesome profile-cards @2019</p> 
          <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer">
            <img src={logo_adalab} alt="logo de adalab" className="footer__image" />
          </a>
      </div>
    );
  }
}
export default Footer;