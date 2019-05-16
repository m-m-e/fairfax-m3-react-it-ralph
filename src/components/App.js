import React from 'react';
import Card from './card/Card';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        job:'',
        email:'',
        tel:'',
        linkedin:'',
        github:'',
        palette: 1,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleColor = this.handleColor.bind(this);
}
handleColor(event){
    const value = parseInt(event.currentTarget.value);
    this.setState({palette: value});
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
  render() {

    const url = 'data:image/png/jpg/svg/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEXMzMxmZmZycnKMjIx/f3+ysrKZmZm/v7+lpaXuFo5qAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWUlEQVR4nO2Wu46bQBSGwcaGkgPmUhrlBRYpD2C2SB0UbWrTJC1ESWrTJK+dcxnHdpNNYNL9n7RrDkbnmxl+8AQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAf0WYBcGGcisiyvRzQ9X1++Q5e/Nej8hxWiohVzjJRLX7etdw28PoR2KD7Z1kuE6Nj4Taj+TsWpqku04toexz/MHGQOUn5bJYYsNrTBLTbWpP/P8LHUVy/PfuD5KusuZdZuN/66bW5Xa+9CGZa2s+qySiH9YxcY319GrJpCPe0qSSkL5ZhiO62EWyeqslG2uehZkbuAXKnGI/e5Bs9Ub3uUnaMugOanNJjl9GD5JEb/RQmKQpOMxyMNR3V66WBJrhLlXJjlLOrkytq+6uXC+RdjGdVLJnY6gPSJN6lcjCJHRRyYYzFWnLR4lxWC7pc8nQqJKJRhZW18H30jr1IZEM859KhuzhIfcnkQzzbFSi75JGmuly/ZYcF7R/kEiGh0KrmAo+3/Ka3e5J40XCyeIEa5W4dbncRdjPTLifeKTaOglnuC38SoZaVkyq0Em451zaRTtPkj7nBGvVy93gvjyLyUVp70kSZpJiqVrr3JTyqtctBF/gRxKRvHKlauyt2GoGnvS49yRJSJpztXN7rlkzrMK48SThzUOl1d5tKibJ8Kw/jV/tYXS7lfNyCe9UTlpFbg8RSb2lw8/gI+XD7bVC6R+6vSZppTlXk7vZmig+q/u52ZNEf6a4mt3vumaYVUwZTOskr/H9OXs3+m8LAAAAAAAAAAAAAAAAAAAAAAAAAPBf+AW+NlaG5H+ROgAAAABJRU5ErkJggg==';
    
    return <Card url={url} state={this.state} handleColor={this.handleColor} handleInput={this.handleInput} />;    
  }
}

export default App;
