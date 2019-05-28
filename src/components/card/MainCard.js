import React from 'react';
import Form from './Form';
import Preview from './Preview';

class MainCard extends React.Component{
    render(){
        const {card, handleColor, handleInput, isAvatarDefault, photo, updateAvatar, actionToReset, sendNewData, handleTwitter, showTwitter, cardURL} = this.props;
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

export default MainCard;