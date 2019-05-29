import React from 'react';
import PropTypes from 'prop-types';

class Design extends React.Component {
  render() {
    const {actionColor, palette, collapsible} = this.props;
    return (
        <div className={collapsible === 'Diseña' ? 'design__main__container collapsible__container' : 'hidden'} >
          <div className="title__color__container">
            <p className="color__title">Colores</p>
          </div>
          <div className="palettes">
            <label className="palettes__label" htmlFor="color1">
              <input value="1" type="radio" id="color1" name="color" onChange={actionColor} checked={palette === 1 ? true : false} />
              <ul className="theme">
                <li className="theme__color" style={{ backgroundColor: '#114e4e' }}>114e4e</li>
                <li className="theme__color" style={{ backgroundColor: '#438792' }}>438792</li>
                <li className="theme__color" style={{ backgroundColor: '#a2deaf' }}>a2deaf</li>
              </ul>
            </label>
            <label className="palettes__label" htmlFor="color2">
              <input value="2" type="radio" id="color2" name="color" onChange={actionColor} checked={palette === 2 ? true : false}/>
              <ul className="theme">
                <li className="theme__color" style={{ backgroundColor: '#420101' }}>420101</li>
                <li className="theme__color" style={{ backgroundColor: '#bd1010' }}>bd1010</li>
                <li className="theme__color" style={{ backgroundColor: '#e95626' }}>e95626</li>
              </ul>
            </label>
            <label className="palettes__label" htmlFor="color3">
              <input value="3" type="radio" id="color3" name="color" onChange={actionColor} checked={palette === 3 ? true : false}/>
              <ul className="theme">
                <li className="theme__color" style={{ backgroundColor: '#3e5b65' }}>3e5b65</li>
                <li className="theme__color" style={{ backgroundColor: '#dfe5eb' }}>dfe5eb</li>
                <li className="theme__color" style={{ backgroundColor: '#a0c0cf' }}>a0c0cf</li>
              </ul>
            </label>
          </div>
        </div>
    );
  }
}

Design.propTypes = {
  actionColor: PropTypes.func,
  collapsible: PropTypes.string,
  palette: PropTypes.number
};

export default Design;