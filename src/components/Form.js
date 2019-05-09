import React from 'react';
import Design from './Design';
import Fill from './Fill';

class Form extends React.Component {
    render() {
        return (
            <section className="main__form">
                <form action="" method="post">
                    <Design />
                    <Fill />
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
                </form>
                <div className="twitter__container hidden">
                    <h2 className="twitter__container--text">La tarjeta ha sido creada</h2>
                    <a href="" className="twitter__container--link"></a>
                    <button className="twitter__container--btn">
                        <i className="fab fa-twitter twitter__icon"></i> Compartir en twitter
                    </button>
                </div>
            </section>
        );
    }
}

export default Form;