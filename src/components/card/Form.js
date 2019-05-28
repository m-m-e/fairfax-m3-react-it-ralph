import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Twitter from './Twitter';
import Collapsable from './Collapsable';

class Form extends React.Component {
    render() {
        const { actionToPerform, actionColor, palette, isAvatarDefault, photo, updateAvatar, name, job, email, phone, linkedin, github, handleTwitter, showTwitter } = this.props;
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
                        component={<Fill 
                            isAvatarDefault={isAvatarDefault} 
                            photo={photo} 
                            actionToPerform={actionToPerform} 
                            name={name} 
                            job={job} 
                            email={email} 
                            phone={phone} 
                            linkedin={linkedin} 
                            github={github} 
                            updateAvatar={updateAvatar} 
                        />}
                    >
                    </Collapsable>

                    <Collapsable
                        fieldset={'share'}
                        title={'Comparte'}
                        icon={'fas fa-share-alt'}
                        component={<Share 
                            handleTwitter={handleTwitter}
                            showTwitter={showTwitter} />}
                    >
                    </Collapsable>
                    <Twitter showTwitter={showTwitter} />
                </form>
            </section>
        );
    }
}

export default Form;