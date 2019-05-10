import React from 'react';

class Collapsable extends React.Component {
  render() {
    return (
      <fieldset className={`${this.props.fieldset}__container form__collapsible jscontainer`}>
        <legend>{this.props.title}</legend>
        <div className={`${this.props.fieldset}__title__container`}>
          <div className="first__title">
            <i className={`${this.props.icon} icon__collapsible`}></i>
            <h2 className="collapsible__title">{this.props.title}</h2>
          </div>
          <div className={`second__title ${this.props.fieldset}__collapsible`}>
            <i className="fas fa-chevron-down arrow__collapsible"></i>
          </div>
        </div>
      {this.props.component}
      </fieldset>

      // <fieldset className="design__container form__collapsible jscontainer">
      //   <legend>Diseña</legend>
      //   <div className="design__title__container">
      //     <div className="first__title">
      //       <i className="far fa-object-ungroup icon__collapsible"></i>
      //       <h2 className="collapsible__title">Diseña</h2>
      //     </div>
      //     <div className="second__title design__collapsible">
      //       <i className="fas fa-chevron-down arrow__collapsible"></i>
      //     </div>
      //   </div>
      // </fieldset>

      // <fieldset className="fill__container form__collapsible jscontainer hidden__collapsible">
      //   <legend>Rellena</legend>
      //   <div className="design__title__container">
      //     <div className="first__title">
      //       <i className="far fa-keyboard icon__collapsible"></i>
      //       <h2 className="collapsible__title">Rellena</h2>
      //     </div>
      //     <div className="second__title fill__collapsible">
      //       <i className="fas fa-chevron-down arrow__collapsible"></i>
      //     </div>
      //   </div>
      // </fieldset>

      // <fieldset className="share__container form__collapsible jscontainer hidden__collapsible">
      //   <legend>Comparte</legend>
      //   <div className="design__title__container">
      //     <div className="first__title">
      //       <i className="fas fa-share-alt icon__collapsible"></i>
      //       <h2 className="collapsible__title">Comparte</h2>
      //     </div>
      //     <div className="second__title share__collapsible">
      //       <i className="fas fa-chevron-down arrow__collapsible"></i>
      //     </div>
      //   </div>
      // </fieldset>
    );
  }
}

export default Collapsable;