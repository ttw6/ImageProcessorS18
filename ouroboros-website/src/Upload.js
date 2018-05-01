import React from 'react';

class Upload extends Component{
	constructor() {
		super();
		this.state = {
			currentImageString: "",
		}
	}

	onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0]
		reader.readAsDataURL(file);
		reader.onloaded = () =>{
			console.log(reader.result);
			this.setState({currentImageString: reader.result});
		}
	}


	render() {
		return (
				<div>
				<h2>Upload your Image</h2>
				<UploadField onFiles={this.onUpload}>
				    <div style={{
					    backgroundColor: 'gray',
		                            width: '200px',
		                            height: '200px',
		                            textAlign: 'center'}}>
					 Upload Here
			            </div>
				 </UploadField>
				 <img src={this.stae.currentImageString} />
				 </div>
		       )
	}
}

export default Upload


