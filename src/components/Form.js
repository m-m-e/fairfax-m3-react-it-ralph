import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
    render() {
        return (
            <section className="main__form">
                <form action="" method="post">
                    <Design />
                    <Fill />
                    <Share />
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