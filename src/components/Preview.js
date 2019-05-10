import React from 'react';

class Preview extends React.Component {
    render() {
        return(
            <section className="main__preview">
                <div className="preview__wrapper">
                    <div className="photo__container">
                        <button className="btn__reset">
                            <i className="trash__icon far fa-trash-alt"></i>Reset
                        </button>
                        <div className="card__header">
                            <div className="side__bar"></div>
                            <div className="full__name">
                                <h3 className="preview__title">Nombre Apellido</h3>
                                <h4 className="preview__subtitle">Front-end Developer</h4>
                            </div>
                        </div>
                        <div className="profile">
                            <div className="preview__photo profile__image js__profile-image" style={{backgroundImage:`url(${this.props.url})`}}>
                                <img src={this.props.url}
                                alt="Foto del usuario" className="photo" />
                            </div>
                        </div>
                        <ul className="list__rs">
                            <li className="reset__list preview__email hidden">
                                <a className="rs__element rs__email" href="mailto:">
                                    <i className="icon far fa-envelope"></i>
                                </a>
                            </li>
                            <li className="reset__list preview__tel hidden">
                                <a className="rs__element rs__tel" href="tel:">
                                    <i className="icon fas fa-mobile-alt"></i>
                                </a>
                            </li>
                            <li className="reset__list preview__linkedin hidden">
                                <a className="rs__element link__linkedin" href="" target="_blank">
                                    <i className="icon fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="reset__list preview__github hidden">
                                <a className="rs__element link__github" href="" target="_blank">
                                    <i className="icon fab fa-github-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Preview;