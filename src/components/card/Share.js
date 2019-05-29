import React from 'react';

class Share extends React.Component{
    render (){
        const {collapsible} = this.props;
        return(
            <div className={collapsible === 'Comparte' ? 'container__button collapsible__container' : 'hidden'}>
                <button className="share__button" type="submit">
                    <i className="far fa-address-card share__icon"></i>Crear tarjeta
                </button>
            </div>            
        );
    }
}

export default Share;