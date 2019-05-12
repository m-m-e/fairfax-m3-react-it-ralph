import React from 'react';
import Form from './Form';
import Preview from './Preview';

class MainCard extends React.Component{
    handleInput(event) {
        console.log(event.currentTarget.value);
    }
    render(){

        return(
            <main className="main__container">
            <Form actionToPerform={this.handleInput}/>
            <Preview url={this.props.url} />
            </main>
       
        );
    }
}

export default MainCard;