import React from 'react';
import Form from './Form';
import Preview from './Preview';

class MainCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            job:'',
            email:'',
            tel:'',
            linkedin:'',
            github:'',
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event) {
        const currentField = event.currentTarget;
        const key = currentField.id;
        const value = currentField.value;
        const newValue = {};
        newValue[key] = value;

        console.log(newValue);
        this.setState(newValue);
    }
    render(){
        const {name, job, email, tel, linkedin, github}=this.state;
        return(
            <main className="main__container">
            <Form actionToPerform={this.handleInput}/>
            <Preview url={this.props.url} name={name} job={job} email={email} tel={tel} linkedin={linkedin} github={github}/>
            </main>
        );
    }
}

export default MainCard;