import React from 'react';
import Form from './Form';
import Preview from './Preview';

class MainCard extends React.Component{
    render(){
        const {card, handleColor, handleInput, isAvatarDefault, photo, updateAvatar, actionToReset} = this.props;
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
                image={image} 
                name={name} 
                job={job} 
                email={email} 
                phone={phone} 
                linkedin={linkedin} 
                github={github} 
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