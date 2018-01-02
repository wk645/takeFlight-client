import React from 'react'
import Dropzone from 'react-dropzone'
// import axios from 'axios'
// import UserInfo from '../adapters/userInfo'
import AlertContainer from 'react-alert'

export default class ProfilePic extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			image: ""
		}
	}

	alertOptions = {
	    offset: 14,
	    position: 'top left',
	    theme: 'dark',
	    time: 3000,
	    transition: 'fade'
  	}

	// handleDrop = (files) => {
	//   const uploaders = files.map(file => {
	//     const formData = new FormData();
	//     formData.append("file", file);
	//     formData.append("tags", `codeinfuse, medium, gist`);
	//     formData.append("upload_preset", "zztcggwp");
	//     formData.append("api_key", "521129587314161");
	//     formData.append("timestamp", (Date.now() / 1000) | 0);
	    

	//     return axios.post("https://api.cloudinary.com/v1_1/zoeykim94/image/upload", formData, {
	//       headers: { "X-Requested-With": "XMLHttpRequest" },
	//     })
	//     .then(response => this.setState({ image: response.data.url })) 
	//   });

	  // axios.all(uploaders).then(() => {
	  //  this.msg.success("Your profile has been changed!")
	  // });
	// }

	handleClick = () => {
		this.props.hideForm()
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.hideForm()
		this.addPicture()
	}

	// addPicture = () => {
 // 		UserInfo.sendUserInfo(this.state.image).then(json => {
 // 			this.setState({image: json.image_url })
 // 		})
 // 	}

	render() {
		return (
		<div>
		<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
		<form onSubmit={this.handleSubmit}>
			<Dropzone className="dropzone" onDrop={this.handleDrop} multiple accept="image/*">
			<p className="profileImage">Change Profile Image</p>
			</Dropzone>
			<br />
			{this.state.image.length > 0 ? <img src={this.state.image} alt="" width="250px" height="250px"/> : null}
			<input type="submit" />
			<button onClick={this.handleClick}>Cancel</button>
		</form>
		</div>
		)
	}
}