import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';

const styles = {

	        button: {
				position: 'absolute',
				top: '250px',
				left: '150px',
			},
}



class TextFieldGet extends React.Component {
    constructor() {
	    super();
	    this.state = {
		    "user_email": "",
		    "im_names":"",
		 
	    }
	}

    onNameTextFieldChange = (event) => {
             this.setState({"user_email": event.target.value});
    }


    fetchData = () => {
	    axios.get("http://vcm-3584.vm.duke.edu:5000/" + {this.state.user_email} + "/images").then( (response) =>{
		    console.log(response.status);
		    this.setState({"im_names": JSON.stringify(response.data)});
	    });
    }

    render() {
	    return (
			    
			    <div style={styles.button}>
			    Enter user email:
			    <TextField value={this.state.user_email} onChange={this.onNameTextFieldChange}/>
			    <Button onClick={this.fetchData}>
			       Commit
			     </Button>
			     {this.state.im_names}
			     </div>
		   );
    }
}

export default TextFieldGet

