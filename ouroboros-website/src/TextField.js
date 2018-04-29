import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = {

	        button: {
				position: 'absolute',
				top: '250px',
				left: '150px',
			},
}



class TextFieldUp extends React.Component {
    constructor() {
	    super();
	    this.state = {
		    "user_email": "",
		    "image_name":"",
	    }
	}

    onNameTextFieldChange = (event) => {
             this.setState({"user_email": event.target.value});
    }

    onImageNameTextFieldChange = (event) => {
	    this.setState({"image_name": event.target.value});
    }

    onButtonClick = (event) => {
         console.log(this.state.user_email);
         console.log(this.state.image_name); 
	 this.props.onEmailClickButton(this.state.user_email, this.state.image_name);
	 this.props.onNameClickButton(this.state.image_name);
    }

    render() {
	    return (
			    
			    <div style={styles.button}>
			    Enter user email:
			    <TextField value={this.state.user_email} onChange={this.onNameTextFieldChange}/>
			    Enter image name:
			    <TextField value={this.state.image_name} onChange={this.onImageNameTextFieldChange}/>
			    <Button onClick={this.onButtonClick}>
			       Commit

			    </Button>

			    </div>
		   );
    }
}

export default TextFieldUp;
