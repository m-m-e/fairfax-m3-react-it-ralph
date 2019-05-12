import React from 'react';

class Fill extends React.Component {
  render() {
    const {actionToPerform} = this.props;
    return(
        <div className="fill__container__section collapsible__container">
            <small className="legend">Los campos indicados con <span className="legend_plus">*</span> son obligatorios.</small>
            <div className="fill__main__container">
                <label className="label__fill" htmlFor="name">Nombre completo <span className="legend_plus">*</span>
                </label>
                <input className="input__fill input__name" type="text" name="name" id="name"
                    placeholder="Ej: Silly Sally" onChange={actionToPerform} required/>

                <label className="label__fill" htmlFor="job">Puesto <span className="legend_plus">*</span>
                </label>
                <input className="input__fill input__job" type="text" name="job" id="job"
                    placeholder="Ej: Front-end unicorn" onChange={actionToPerform} required />

                <label className="label__fill" htmlFor="profile_image">Imagen de perfil <span className="legend_plus">*</span>
                </label>
                <div className="thumbnail__container">
                    <label htmlFor="avatar"></label>
                    <button className="action__upload-btn js__profile-trigger" type="button">Añadir imagen</button>
                    <input type="file" name="photo" id="img-selector"
                        className="action__hiddenField js__profile-upload-btn" required />
                    <div className="profile__preview js__profile-preview"></div>
                </div>

                <label className="label__fill" htmlFor="email">Email <span className="legend_plus">*</span>
                </label>
                <input className="input__fill input__email" type="email" name="email" id="email"
                    placeholder="Ej: sally-hill@gmail.com" onChange={actionToPerform} required />

                <label className="label__fill" htmlFor="tel">Teléfono</label>
                <input className="input__fill  input__tel" type="tel" name="phone"
                    id="tel" maxLength="15" placeholder="Ej: 555 555 555"  onChange={actionToPerform} required />

                <label className="label__fill" htmlFor="linkedin">Linkedin <span className="legend_plus">*</span></label>
                <input className="input__fill input__linkedin ellipsis" type="text" name="linkedin"
                    id="linkedin" placeholder="Ej: sally.hill"  onChange={actionToPerform} required />

                <label className="label__fill" htmlFor="github">Github <span className="legend_plus">*</span>
                </label>
                <input className="input__fill input__github ellipsis" type="text" name="github"
                    id="github" placeholder="Ej: sally-hill" onChange={actionToPerform} required />
            </div>
        </div>

    );
  }
}
export default Fill;