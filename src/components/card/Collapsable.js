import React from 'react';
import PropTypes from 'prop-types';

class Collapsable extends React.Component {
  render() {
    const {openCollapsible, title} = this.props;
    return (
      <fieldset className={`${this.props.fieldset}__container form__collapsible jscontainer $` }>
        <legend>{this.props.title}</legend>
        <div className={`${this.props.fieldset}__title__container`} id={title} onClick={openCollapsible}>
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
    );
  }
}

Collapsable.propTypes = {
  collapsible: PropTypes.string,
  sendNewData: PropTypes.func
};

export default Collapsable;