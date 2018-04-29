import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class TextField extends React.Component {
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
	 this.props.onClickButton(this.state.user_email); // call the parent function
    }

    render() {
	    return (
			    <div>
			    <TextField value={this.state.user_email} onChange={this.onNameTextFieldChange}/>
			    <Button onClick

			    </Button>

			    </div>
		   );
    }
}

export default TextField;
