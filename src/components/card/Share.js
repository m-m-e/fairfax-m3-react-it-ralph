import React from 'react';
import PropTypes from 'prop-types';

class Share extends React.Component{
    render (){
        const {collapsible, sendNewData} = this.props;
        return(
            <div className={collapsible === 'Comparte' ? 'container__button collapsible__container' : 'hidden'}>
                <button className="share__button" type="submit" onClick={sendNewData}>
                    <i className="far fa-address-card share__icon"></i>Crear tarjeta
                </button>
            </div>            
        );
    }
}

Share.propTypes = {
    collapsible: PropTypes.string,
    sendNewData: PropTypes.func
  };

export default Share;