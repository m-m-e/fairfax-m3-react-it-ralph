import React from 'react';

class Share extends React.Component{
    render (){
        return(
                <div className="container__button collapsible__container">
                    <button className="share__button" type="submit" onClick={this.props.handleTwitter}>
                        <i className="far fa-address-card share__icon"></i>Crear tarjeta
                    </button>
                </div>            
        );
    }
}

export default Share;