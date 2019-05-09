import React from 'react';
import logo from '../images/jigsaw_logo.svg';
import logo_adalab from '../images/logo-adalab.png';
import '../App.scss';
import Footer from './Footer';
import HeaderCard from './HeaderCard';
import MainCard from './MainCard';

class Card extends React.Component {
    render(){
        const url = "url ('data:image/png/jpg/svg/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEXMzMxmZmZycnKMjIx/f3+ysrKZmZm/v7+lpaXuFo5qAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWUlEQVR4nO2Wu46bQBSGwcaGkgPmUhrlBRYpD2C2SB0UbWrTJC1ESWrTJK+dcxnHdpNNYNL9n7RrDkbnmxl+8AQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAf0WYBcGGcisiyvRzQ9X1++Q5e/Nej8hxWiohVzjJRLX7etdw28PoR2KD7Z1kuE6Nj4Taj+TsWpqku04toexz/MHGQOUn5bJYYsNrTBLTbWpP/P8LHUVy/PfuD5KusuZdZuN/66bW5Xa+9CGZa2s+qySiH9YxcY319GrJpCPe0qSSkL5ZhiO62EWyeqslG2uehZkbuAXKnGI/e5Bs9Ub3uUnaMugOanNJjl9GD5JEb/RQmKQpOMxyMNR3V66WBJrhLlXJjlLOrkytq+6uXC+RdjGdVLJnY6gPSJN6lcjCJHRRyYYzFWnLR4lxWC7pc8nQqJKJRhZW18H30jr1IZEM859KhuzhIfcnkQzzbFSi75JGmuly/ZYcF7R/kEiGh0KrmAo+3/Ka3e5J40XCyeIEa5W4dbncRdjPTLifeKTaOglnuC38SoZaVkyq0Em451zaRTtPkj7nBGvVy93gvjyLyUVp70kSZpJiqVrr3JTyqtctBF/gRxKRvHKlauyt2GoGnvS49yRJSJpztXN7rlkzrMK48SThzUOl1d5tKibJ8Kw/jV/tYXS7lfNyCe9UTlpFbg8RSb2lw8/gI+XD7bVC6R+6vSZppTlXk7vZmig+q/u52ZNEf6a4mt3vumaYVUwZTOskr/H9OXs3+m8LAAAAAAAAAAAAAAAAAAAAAAAAAPBf+AW+NlaG5H+ROgAAAABJRU5ErkJggg==')";

        const mainContent = (
            <div className="page">
                <HeaderCard logo = {logo} />
                <MainCard />
                <Footer logo_adalab={logo_adalab}/>
            </div>
        );
        return mainContent;
    }
}

export default Card;