import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Twitter from './Twitter';
import Collapsable from './Collapsable';

class Form extends React.Component {
    render() {
        return (
            <section className="main__form">
                <form action="" method="post">
                    <Collapsable 
                        fieldset={'design'}
                        title={'Diseña'}
                        icon={'far fa-object-ungroup'}
                        component={<Design />}
                        >
                        
                    </Collapsable>
                    <Fill />
                    <Share />
                </form>
                <Twitter />
            </section>
        );
    }
}

export default Form;