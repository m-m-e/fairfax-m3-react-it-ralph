import React from 'react';
import Form from './Form';
import Preview from './Preview';

class MainCard extends React.Component{
    render(){
        const {image, card, handleColor, handleInput, isAvatarDefault, avatar, updateAvatar, actionToReset} = this.props;
        const {palette, name, job, email, tel, linkedin, github} = card;
        return(
            <main className="main__container">

            <Form 
                actionToPerform={handleInput}
                actionColor={handleColor} 
                palette={palette} 
                isAvatarDefault={isAvatarDefault} 
                avatar={avatar} 
                updateAvatar={updateAvatar}
            />
            <Preview 
                image={image} 
                name={name} 
                job={job} 
                email={email} 
                tel={tel} 
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