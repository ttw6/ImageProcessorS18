import React, { Component } from 'react';
import Dropzone from 'react-dropzone'


const styles = {

	loadBox: {
			 backgroundColor: 'gray',
     			 width: '200px',
			 height: '150px',
			 textAlign: 'center',
			 textFont: '5px',
			 position: 'absolute',
			 top: '150px',
			 left: '500px',},
	infoBox: {
			 textAlign: 'center',
			 textFont: '10px',
			 position: 'absolute',
			 top: '150px',
			 left: '700px',},
	write: {
                         textFont: '5px',
	       },
}


class Basic extends React.Component {
       
	constructor() {
		      super()
			          this.state = { files: [],
					  currentImageString: '' }
		        }

	  onDrop(files) {
		        this.setState({
				files
			       });
			const reader = new FileReader()
			const file = files[0]
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				//console.log(reader.result);	
				this.setState({currentImageString: reader.result});
				this.props.onImageUp(this.state.currentImageString);
			  }
	  }

	  render() {
		          return (
			   <section>
			        <div className="dropzone">
				
				<Dropzone onDrop={this.onDrop.bind(this)} style={styles.loadBox}>
				<h2 style={styles.write}> Drop file here to upload, or click to select file </h2>
				</Dropzone>
				</div>

				<div style={styles.infoBox}>

				<h2> Dropped file info </h2>
				<ul>
                                    {this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bb {f.height} bytes</li>)}
				</ul>
				</div>

					
			    </section>
				 );
			    }
}


export default Basic;


