import React from 'react';
import Form from './Form';
import Preview from './Preview';

class MainCard extends React.Component{
    render(){
        const {url, card, handleColor, handleInput} = this.props;
        const {palette, name, job, email, tel, linkedin, github} = card;
        return(
            <main className="main__container">

            <Form actionToPerform={handleInput} actionColor={handleColor} palette={palette}/>
            <Preview url={url} name={name} job={job} email={email} tel={tel} linkedin={linkedin} github={github} palette={palette}/>

            </main>
        );
    }
}

export default MainCard;