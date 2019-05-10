import React from 'react';

class Share extends React.Component{
    render (){
        return(
            <fieldset className="share__container form__collapsible jscontainer hidden__collapsible">
                <legend>Comparte</legend>
                <div className="design__title__container">
                    <div className="first__title">
                        <i className="fas fa-share-alt icon__collapsible"></i>
                        <h2 className="collapsible__title">Comparte</h2>
                    </div>
                    <div className="second__title share__collapsible">
                        <i className="fas fa-chevron-down arrow__collapsible"></i>
                    </div>
                </div>
                <div className="container__button collapsible__container">
                    <button className="share__button" type="submit">
                        <i className="far fa-address-card share__icon"></i>Crear tarjeta
                    </button>
                </div>
            </fieldset>               
        );
    }
}

export default Share;