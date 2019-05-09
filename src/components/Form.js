import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <section className="main__form">
                <form action="" method="post">
                    <fieldset className="design__container form__collapsible jscontainer">
                        <legend>Diseña</legend>
                        <div className="design__title__container">
                            <div className="first__title"> 
                                <i className="far fa-object-ungroup icon__collapsible"></i>
                                <h2 className="collapsible__title">Diseña</h2>
                            </div>
                            <div className="second__title design__collapsible">
                                <i className="fas fa-chevron-down arrow__collapsible"></i>
                            </div>
                        </div>
                        <div className="design__main__container collapsible__container">
                            <div className="title__color__container">
                                <p className="color__title">Colores</p>
                            </div>
                            <div className="palettes">
                                <label className="palettes__label" htmlFor="color1">
                                    <input value="1" type="radio" id="color1" name="color"/>
                                    <ul className="theme">
                                        <li className="theme__color" style={{backgroundColor:'#114e4e'}}>114e4e</li>
                                        <li className="theme__color" style={{backgroundColor:'#438792'}}>438792</li>
                                        <li className="theme__color" style={{backgroundColor:'#a2deaf'}}>a2deaf</li>
                                    </ul>
                                </label>
                                <label className="palettes__label" htmlFor="color2">
                                    <input value="2" type="radio" id="color2" name="color" />
                                    <ul className="theme">
                                        <li className="theme__color" style={{backgroundColor:'#420101'}}>420101</li>
                                        <li className="theme__color" style={{backgroundColor:'#bd1010'}}>bd1010</li>
                                        <li className="theme__color" style={{backgroundColor:'#e95626'}}>e95626</li>
                                    </ul>
                                </label>
                                <label className="palettes__label" htmlFor="color3">
                                    <input value="3" type="radio" id="color3" name="color" />
                                    <ul className="theme">
                                        <li className="theme__color" style={{backgroundColor:'#3e5b65'}}>3e5b65</li>
                                        <li className="theme__color" style={{backgroundColor:'#dfe5eb'}}>dfe5eb</li>
                                        <li className="theme__color" style={{backgroundColor:'#a0c0cf'}}>a0c0cf</li>
                                    </ul>
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="fill__container form__collapsible jscontainer hidden__collapsible">
                        <legend>Rellena</legend>
                        <div className="design__title__container">
                            <div className="first__title">
                                <i className="far fa-keyboard icon__collapsible"></i>
                                <h2 className="collapsible__title">Rellena</h2>
                            </div>
                            <div className="second__title fill__collapsible">
                                <i className="fas fa-chevron-down arrow__collapsible"></i>
                            </div>
                        </div>
                        <div className="fill__container__section collapsible__container">
                            <small className="legend">Los campos indicados con <span className="legend_plus">*</span> son obligatorios.</small>
                            <div className="fill__main__container">
                                <label className="label__fill" htmlFor="name">Nombre completo <span className="legend_plus">*</span>    
                                </label>
                                <input className="input__fill input__name" type="text" name="name" id="name"
                                placeholder="Ej: Silly Sally" required/>

                                <label className="label__fill" htmlFor="job">Puesto <span className="legend_plus">*</span>
                                </label>
                                <input className="input__fill input__job" type="text" name="job" id="job"
                                placeholder="Ej: Front-end unicorn" required />

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
                                placeholder="Ej: sally-hill@gmail.com" required />

                                <label className="label__fill" htmlFor="tel">Teléfono</label>
                                <input className="input__fill  input__tel" type="tel" name="phone"
                                id="tel" maxLength="15" placeholder="Ej: 555 555 555" required />
                                
                                <label className="label__fill" htmlFor="linkedin">Linkedin <span className="legend_plus">*</span></label>
                                <input className="input__fill input__linkedin ellipsis" type="text" name="linkedin"
                                id="linkedin" placeholder="Ej: sally.hill" required />

                                <label className="label__fill" htmlFor="github">Github <span className="legend_plus">*</span>
                                </label>
                                <input className="input__fill input__github ellipsis" type="text" name="github"
                                id="github" placeholder="Ej: sally-hill" required />
                             </div>
                        </div>
                    </fieldset>
                    
                    <fieldset className="share__container form__collapsible jscontainer hidden__collapsible">
                        <legend>Comparte</legend>
                        <div className="design__title__container">
                            <div className="first__title">
                                <i className="fas fa-share-alt icon__collapsible"></i>
                                <h2 className="collapsible__title">Comparte</h2>
                            </div>
                            <div className="second__title share__collapsible">
                            <i className="fas fa-chevron-down arrow__collapsible"></i>
                            </div>
                        </div>
                        <div className="container__button collapsible__container">
                            <button className="share__button" type="submit">
                                <i className="far fa-address-card share__icon"></i>Crear tarjeta
                            </button>
                        </div>
                    </fieldset>
                </form>
                <div className="twitter__container hidden">
                    <h2 className="twitter__container--text">La tarjeta ha sido creada</h2>
                    <a href="" className="twitter__container--link"></a>
                    <button className="twitter__container--btn">
                        <i className="fab fa-twitter twitter__icon"></i> Compartir en twitter
                    </button>
                </div>
            </section>
        );
    }
}

export default Form;