import React from 'react';
import Form from './Form';
import Preview from './Preview';
import PropTypes from 'prop-types';

class MainCard extends React.Component{
    render(){
        const {card, handleColor, handleInput, isAvatarDefault, photo, updateAvatar, actionToReset, openCollapsible, collapsible, sendNewData, handleTwitter, showTwitter, cardURL} = this.props;
        const {palette, name, job, email, phone, linkedin, github} = card;
        return(
            <main className="main__container">

            <Form 
                actionToPerform={handleInput}
                actionColor={handleColor} 
                palette={palette} 
                isAvatarDefault={isAvatarDefault} 
                photo={photo} 
                updateAvatar={updateAvatar}
                name={name} 
                job={job} 
                email={email} 
                phone={phone} 
                linkedin={linkedin}
                github={github}
                openCollapsible={openCollapsible}
                collapsible={collapsible} 
                sendNewData={sendNewData}
                handleTwitter={handleTwitter}
                showTwitter={showTwitter}
                cardURL={cardURL}
            />
            <Preview 
                photo={photo} 
                name={name} 
                job={job} 
                email={email} 
                phone={phone} 
                linkedin={linkedin} 
                github={github} 
                palette={palette}
                actionToReset={actionToReset}
            />

            </main>
        );
    }
}

MainCard.propTypes = {
    card: PropTypes.object,
    handleColor: PropTypes.func,
    handleInput: PropTypes.func,
    isAvatarDefault: PropTypes.bool,
    photo: PropTypes.string,
    updateAvatar: PropTypes.func,
    actionToReset: PropTypes.func,
    openCollapsible: PropTypes.func,
    collapsible: PropTypes.string,
    handleTwitter: PropTypes.func,
    sendNewData: PropTypes.func,
    showTwitter: PropTypes.bool,
    cardURL: PropTypes.string
};

export default MainCard;