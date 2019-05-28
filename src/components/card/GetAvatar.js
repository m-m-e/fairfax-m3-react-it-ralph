import React, {Component} from "react";
import PropTypes from 'prop-types';

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();
    
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click(); 
  }

  uploadImage(e){
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return (!isDefault) ? {backgroundImage: `url(${image})`} : {};
  }

  render() {
    const {isAvatarDefault, photo} = this.props;
    return (
      <div className="get-avatar">
        <button className="action__upload-btn js__profile-trigger" type="button" onClick={this.handleFilePicker}>Añadir imagen</button>
        
        <input type="file" ref={this.myFileField} className="action__hiddenField js__profile-upload-btn" onChange={this.uploadImage} name="photo" id="img-selector" />
        
        <div className="profile__preview js__profile-preview" style={this.getPreview(isAvatarDefault, photo)}></div>
      </div>
    );
  }
}

GetAvatar.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired
};

export default GetAvatar;
