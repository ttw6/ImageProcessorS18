import React from 'react';
import Dropzone from 'react-dropzone'

class Upload extends React.Component{
	constructor() {
		super();
		this.state = {
			currentImageString: "",
			filesIm: [],
		}
	}

	onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0]
		this.setState({'filesIm': files}); 
		reader.readAsDataURL(file);
		reader.onloaded = () =>{
			console.log(reader.result);
			this.setState({currentImageString: reader.result});
		}
	}


	render() {
		return (
				<div className="dropzone">
				<h2>Upload your Image</h2>
				<Dropzone onDrop={this.onUpload.bind(this)}>
				    <div style={{
					    backgroundColor: 'gray',
		                            width: '200px',
		                            height: '200px',
		                            textAlign: 'center'}}>
					 Upload Here
			            </div>
				 </Dropzone>
				 <img src={this.state.currentImageString} />
				 <ul>
				     {this.state.filesIm.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)}
				 </ul>
				 <img src={this.state.filesIm}/>
				 </div>
		       )
	}
}

export default Upload


