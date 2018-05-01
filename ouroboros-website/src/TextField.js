import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SimpleSelect from './TransMenu.js';
import axios from 'axios';
import Basic from './TrialUp.js';

const styles = {

	        button: {
				position: 'absolute',
				top: '200px',
				left: '50px',
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

    onButtonClick = (event) => {
         console.log(this.state.user_email);
         console.log(this.state.image_name); 
	 console.log(this.state.filter);
	 this.props.onEmailClickButton(this.state.user_email);
	 this.props.onNameClickButton(this.state.image_name);
    }


    onSelectChange = (values) => {
	     this.setState({"filter": values });
	     console.log(this.state.filter);
		  
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
		    this.setState({"filt_image": JSON.stringify(response.data)});
	    });
    }

    render() {
	    return (
			    
			    <div style={styles.button}>
			    Enter user email:
			    <TextField value={this.state.user_email} onChange={this.onNameTextFieldChange}/>
			    Enter image name:
			    <TextField value={this.state.image_name} onChange={this.onImageNameTextFieldChange}/>
                            <SimpleSelect onChangeSelect={this.onSelectChange}/>
			    <Basic onImageUp={this.onImageDataUp} />
			    <Button onClick={this.fetchDataPost}>
			       COMMIT
			    </Button>
			   
			    </div>
		   );
    }
}

export default TextFieldUp;
