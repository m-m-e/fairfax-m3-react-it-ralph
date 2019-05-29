import React from 'react';
import PropTypes from 'prop-types';
import GetAvatar from './GetAvatar';

class Fill extends React.Component {
  render() {
    const {actionToPerform, isAvatarDefault, photo, updateAvatar, name, job, email, phone, linkedin, github, collapsible} = this.props;
    return(
        <div className={collapsible === 'Rellena' ? 'fill__container__section collapsible__container ' : 'hidden'}>
            <small className="legend">Los campos indicados con <span className="legend_plus">*</span> son obligatorios.</small>
            <div className="fill__main__container">
                <label className="label__fill" htmlFor="name">Nombre completo <span className="legend_plus">*</span>
                </label>

                <input 
                    className="input__fill input__name" 
                    type="text"
                    name="name" 
                    id="name"
                    placeholder= {name !== '' ? name : "Ej: Silly Sally"}
                    onChange={actionToPerform}
                    value={name}
                    required 
                />
                <label className="label__fill" htmlFor="job">Puesto <span className="legend_plus">*</span>
                </label>
                <input 
                    className="input__fill input__job" 
                    type="text" 
                    name="job" 
                    id="job"
                    placeholder="Ej: Front-end unicorn" 
                    onChange={actionToPerform} 
                    value={job} 
                    required 
                />
                <label className="label__fill" htmlFor="profile_image">Imagen de perfil <span className="legend_plus">*</span>
                </label>
                <div className="thumbnail__container">
                    <label htmlFor="avatar"></label>
                    <GetAvatar 
                    isAvatarDefault={isAvatarDefault} 
                    photo={photo} updateAvatar={updateAvatar}/>
                </div>

                <label className="label__fill" htmlFor="email">Email <span className="legend_plus">*</span>
                </label>

                <input 
                    className="input__fill input__email" 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="Ej: sally-hill@gmail.com" 
                    onChange={actionToPerform} 
                    value={email} 
                    required 
                />

                <label className="label__fill" htmlFor="phone">Teléfono</label>
                <input 
                    className="input__fill  input__tel" 
                    type="tel" 
                    name="phone"
                    id="phone" 
                    maxLength="15" 
                    placeholder="Ej: 555 555 555"  
                    onChange={actionToPerform} 
                    value={phone} 
                    required
                />

                <label className="label__fill" htmlFor="linkedin">Linkedin <span className="legend_plus">*</span></label>
                <input 
                    className="input__fill input__linkedin ellipsis" 
                    type="text" 
                    name="linkedin"
                    id="linkedin"  
                    placeholder="Ej: sally.hill"  
                    onChange={actionToPerform} 
                    value={linkedin} 
                    required
                />

                <label className="label__fill" htmlFor="github">Github <span className="legend_plus">*</span>
                </label>
                <input 
                    className="input__fill input__github ellipsis" 
                    type="text" 
                    name="github"
                    id="github" 
                    placeholder="Ej: sally-hill" 
                    onChange={actionToPerform} 
                    value={github} 
                    required
                />
            </div>
        </div>
    );
  }
}

Fill.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    actionToPerform: PropTypes.func,
    isAvatarDefault: PropTypes.bool,
    photo: PropTypes.string,
    updateAvatar: PropTypes.func,
    collapsible: PropTypes.string
};

export default Fill;