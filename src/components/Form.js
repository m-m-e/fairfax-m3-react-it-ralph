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

                    <Collapsable
                        fieldset={'fill'}
                        title={'Rellena'}
                        icon={'far fa-keyboard'}
                        component={<Fill />}
                    >
                    </Collapsable>

                    <Collapsable
                        fieldset={'share'}
                        title={'Comparte'}
                        icon={'fas fa-share-alt'}
                        component={<Share />}
                        >
                    </Collapsable>
                </form>
                <Twitter />
            </section>
        );
    }
}

export default Form;