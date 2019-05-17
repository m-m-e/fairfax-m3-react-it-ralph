import React from 'react';
import logo from '../../images/jigsaw_logo.svg';
import logo_adalab from '../../images/logo-adalab.png';
import HeaderCard from './HeaderCard';
import MainCard from './MainCard';
import Footer from '../Footer';

class Card extends React.Component {
    render(){
        const {image, state, handleColor, handleInput, isAvatarDefault, avatar, updateAvatar} = this.props;
        const mainContent = (
            <div className="page">
                <HeaderCard logo = {logo} />
                <MainCard image={image} state={state} handleColor={handleColor} handleInput={handleInput} isAvatarDefault={isAvatarDefault} avatar={avatar} updateAvatar={updateAvatar} />
                <Footer logo_adalab={logo_adalab}/>
            </div>
        );
        return mainContent;
    }
}

export default Card;