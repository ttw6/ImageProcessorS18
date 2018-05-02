import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SimpleSelect from './TransMenu.js';
import axios from 'axios';
import Basic from './TrialUp.js';
import DownloadLink from 'react-download-link';

const styles = {

	        line1: {
				position: 'absolute',
				top: '150px',
				left: '180px',
			},
		email: {
			       position: 'absolute',
			       top: '150px',
			       left: '50px',
			       fontSize: '15px', 


		       },
		name: {
			      
			       position: 'absolute',
			       top: '200px',
			       left: '50px',
			       fontSize: '15px', 
		      },

	        line2: {
				position: 'absolute',
				top: '200px',
				left: '190px',
			},
		button: {
			       position: 'absolute',
			       top: '350px',
			       left: '50px',
			       boxShadow: 'yes',
			       textTransform: 'none',
			       borderRadius: 2,
			       fontSize: 15,
			       padding: '6px 12px',
			       border: '2px solid',
			       backgroundColor: '#d50000',
			       borderColor:'#9b0000',
			}, 

		button1: {
			       position: 'absolute',
			       top: '1600px',
			       left: '50px',
			       boxShadow: 'yes',
			       textTransform: 'none',
			       borderRadius: 2,
			       fontSize: 15,
			       padding: '6px 12px',
			       border: '2px solid',
			       backgroundColor: '#90caf9',
			       borderColor:'#5d99c6',
 			 }, 
		
		button2: {
			       position: 'absolute',
			       top: '1650px',
			       left: '50px',
			       boxShadow: 'yes',
			       textTransform: 'none',
			       borderRadius: 2,
			       fontSize: 15,
			       padding: '6px 12px',
			       border: '2px solid',
			       backgroundColor: '#90caf9',
			       borderColor:'#5d99c6',
			}, 
		
		button3: {
			       position: 'absolute',
			       top: '1700px',
			       left: '50px',
			       boxShadow: 'yes',
			       textTransform: 'none',
			       borderRadius: 2,
			       fontSize: 15,
			       padding: '6px 12px',
			       border: '2px solid',
			       backgroundColor: '#90caf9',
			       borderColor:'#5d99c6',
			}, 
		
		
		im1: {
			       position: 'absolute',
			       top: '500px',
			       left: '50px', 
		     },
               

		im2: {
			       position: 'absolute',
			       top: '500px',
			       left: '600px', 
		     },
		       
		
		im3: {
			       position: 'absolute',
			       top: '1100px',
			       left: '50px', 
		     },

		im4: {
			       position: 'absolute',
			       top: '1100px',
			       left: '600px', 
		     },
		
		label1: {
			      
			       position: 'absolute',
			       top: '450px',
			       left: '50px',
			       fontSize: '15px', 
		      },
		
		label2: {
			      
			       position: 'absolute',
			       top: '450px',
			       left: '600px',
			       fontSize: '15px', 
		      },

		label3: {
			      
			       position: 'absolute',
			       top: '1050px',
			       left: '50px',
			       fontSize: '15px', 
			},

		label4: {
			      
			       position: 'absolute',
			       top: '1050px',
			       left: '600px',
			       fontSize: '15px', 
		      },

		label5: {
			      
			       position: 'absolute',
			       top: '400px',
			       left: '50px',
			       fontSize: '15px', 
		      },
}



class TextFieldUp extends React.Component {
    constructor() {
	    super();
	    this.state = {
		    "user_email": "",
		    "image_name":"",
		    "image_data": "",
		    "filter": [],
		    "filt_image": "",
		    "hist_image": "",
		    "original_hist": "",
		    "size": "",
		    "size2":"",
	    }
	}

    onNameTextFieldChange = (event) => {
             this.setState({"user_email": event.target.value});
	     console.log(this.state.user_email);
    }

    onImageNameTextFieldChange = (event) => {
	    this.setState({"image_name": event.target.value});
	    console.log(this.state.image_name);
    }



    onSelectChange = (values) => {
	     this.setState({"filter": values }, 
		() => {console.log(this.state.filter)}
		);
		  
     }

    onImageDataUp = (valueImage) => {
	    this.setState({"image_data": valueImage});
	    console.log(this.state.image_data);

    }

    fetchDataPost = () => {
	    axios.post("http://vcm-3584.vm.duke.edu:5000/imageFilter", {
	            email: this.state.user_email ,
	            filename: this.state.image_name ,
	            Data: this.state.image_data ,
	            Filter: this.state.filter  }).then( (response) =>{
		    console.log(response.status);
		    this.setState({"filt_image": response.data.filtered_string});
		    this.setState({"hist_image": response.data.hist_string});
		    this.setState({"original_hist": response.data.raw_hist});
		    this.setState({"size": response.data.image_size1});
		    this.setState({"size2": response.data.image_size2});
	    });
    }

    //DownloadIm = () => {
      //       var url = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
        //     window.open(url);	     


    //}

    render() {
	    return (
			    
			    <div>
			    <h2 style={styles.email}> Enter user email: </h2>
			    <TextField value={this.state.user_email} onChange={this.onNameTextFieldChange} style={styles.line1} />
			    <h2 style={styles.name}> Enter image name: </h2>
			    <TextField value={this.state.image_name} onChange={this.onImageNameTextFieldChange} style={styles.line2}/>
                            <SimpleSelect onChangeSelect={this.onSelectChange}  />
			    
			    
			    <Basic onImageUp={this.onImageDataUp} />
			    <Button style={styles.button} onClick={this.fetchDataPost}>
			       COMMIT
			    </Button>
                            
			    <a download={"filtered_" + this.state.image_name + ".jpeg"} href={"data:image/jpeg;base64," + this.state.filt_image} >
			    <Button style={styles.button1} nClick={this.DownloadIm}>
                               Download transformed image as jpeg
			    </Button>
			    </a>

			    <a download={"filtered_" + this.state.image_name + ".png"} href={"data:image/png;base64," + this.state.filt_image} >
			    <Button style={styles.button2} onClick={this.DownloadIm}>
                               Download transformed image as png
			    </Button>
			    </a>
			    
			    <a download={"filtered_" + this.state.image_name + ".tiff"} href={"data:image/tiff;base64," + this.state.filt_image} >
			    <Button style={styles.button3} onClick={this.DownloadIm}>
                               Download transformed image as tiff
			    </Button>
			    </a>

			    <h2 style={styles.label1}> Original image: </h2>

			    <h2 style={styles.label2}> Histogram of original image: </h2>

			    <h2 style={styles.label3}> Transformed image: </h2>
			    <h2 style={styles.label5}> Image size: {this.state.size}   {this.state.size2} </h2>

			    <h2 style={styles.label4}> Histogram of transformed image: </h2>

			    <img src={this.state.image_data} width='500' height='500' style={styles.im1} />
			    <img src={'data:image/jpeg;base64,' + this.state.filt_image} width='500' height='500' style={styles.im3} />
			    <img src={'data:image/jpeg;base64,' + this.state.hist_image} width='500' height='500' style={styles.im4} />
			   
			    <img src={'data:image/jpeg;base64,' + this.state.original_hist} width='500' height='500' style={styles.im2} />
			    
			    </div>
		   );
    }
}

export default TextFieldUp;
