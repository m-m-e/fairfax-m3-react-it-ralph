import React from 'react';
import Form from './Form';
import Preview from './Preview';

class MainCard extends React.Component{
    render(){
        const {url, state, handleColor, handleInput, isAvatarDefault, avatar, updateAvatar } = this.props;
        const {palette, name, job, email, tel, linkedin, github} = state;
        return(
            <main className="main__container">

            <Form actionToPerform={handleInput} actionColor={handleColor} palette={palette} isAvatarDefault={isAvatarDefault} avatar={avatar} updateAvatar={updateAvatar}/>
            <Preview url={url} name={name} job={job} email={email} tel={tel} linkedin={linkedin} github={github} palette={palette}/>

            </main>
        );
    }
}

export default MainCard;