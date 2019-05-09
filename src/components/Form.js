import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Twitter from './Twitter';

class Form extends React.Component {
    render() {
        return (
            <section className="main__form">
                <form action="" method="post">
                    <Design />
                    <Fill />
                    <Share />
                </form>
                <Twitter />
            </section>
        );
    }
}

export default Form;