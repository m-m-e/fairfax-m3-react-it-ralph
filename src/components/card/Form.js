import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Twitter from './Twitter';
import Collapsable from './Collapsable';

class Form extends React.Component {
    render() {
        const { actionToPerform, actionColor, palette } = this.props;
        return (
            <section className="main__form">
                <form action="" method="post">
                    <Collapsable
                        fieldset={'design'}
                        title={'Diseña'}
                        icon={'far fa-object-ungroup'}
                        component={<Design actionColor={actionColor} palette={palette}/>}
                    >
                    </Collapsable>

                    <Collapsable
                        fieldset={'fill'}
                        title={'Rellena'}
                        icon={'far fa-keyboard'}

                        component={<Fill actionToPerform={actionToPerform} name={this.props.name} job={this.props.job} email={this.props.email} tel={this.props.tel} linkedin={this.props.linkedin} github={this.props.github} />}

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