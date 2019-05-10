import React from 'react';
import Form from './Form';
import Preview from './Preview';

class MainCard extends React.Component{
    render(){

        return(
            <main className="main__container">
            <Form />
            <Preview url={this.props.url} />
            </main>
       
        );
    }
}

export default MainCard;