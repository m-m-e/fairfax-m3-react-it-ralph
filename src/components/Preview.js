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
                            <div className="preview__photo profile__image js__profile-image" style={{backgroundImage:this.props.url}}>
                                <img src='data:image/png/jpg/svg/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEXMzMxmZmZycnKMjIx/f3+ysrKZmZm/v7+lpaXuFo5qAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWUlEQVR4nO2Wu46bQBSGwcaGkgPmUhrlBRYpD2C2SB0UbWrTJC1ESWrTJK+dcxnHdpNNYNL9n7RrDkbnmxl+8AQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAf0WYBcGGcisiyvRzQ9X1++Q5e/Nej8hxWiohVzjJRLX7etdw28PoR2KD7Z1kuE6Nj4Taj+TsWpqku04toexz/MHGQOUn5bJYYsNrTBLTbWpP/P8LHUVy/PfuD5KusuZdZuN/66bW5Xa+9CGZa2s+qySiH9YxcY319GrJpCPe0qSSkL5ZhiO62EWyeqslG2uehZkbuAXKnGI/e5Bs9Ub3uUnaMugOanNJjl9GD5JEb/RQmKQpOMxyMNR3V66WBJrhLlXJjlLOrkytq+6uXC+RdjGdVLJnY6gPSJN6lcjCJHRRyYYzFWnLR4lxWC7pc8nQqJKJRhZW18H30jr1IZEM859KhuzhIfcnkQzzbFSi75JGmuly/ZYcF7R/kEiGh0KrmAo+3/Ka3e5J40XCyeIEa5W4dbncRdjPTLifeKTaOglnuC38SoZaVkyq0Em451zaRTtPkj7nBGvVy93gvjyLyUVp70kSZpJiqVrr3JTyqtctBF/gRxKRvHKlauyt2GoGnvS49yRJSJpztXN7rlkzrMK48SThzUOl1d5tKibJ8Kw/jV/tYXS7lfNyCe9UTlpFbg8RSb2lw8/gI+XD7bVC6R+6vSZppTlXk7vZmig+q/u52ZNEf6a4mt3vumaYVUwZTOskr/H9OXs3+m8LAAAAAAAAAAAAAAAAAAAAAAAAAPBf+AW+NlaG5H+ROgAAAABJRU5ErkJggg=='
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