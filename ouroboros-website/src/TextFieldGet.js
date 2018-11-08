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
		    "user_action": "",
		    "latency": "",
		    "time_stamp": "",
		 
	    }
	}

    onNameTextFieldChange = (event) => {
             this.setState({"user_email": event.target.value});
    }


    fetchData = () => {
	    axios.get("http://vcm-7272.vm.duke.edu:5000/" + this.state.user_email + "/images").then( (response) =>{
		    console.log(response.status);
		    this.setState({"im_names": JSON.stringify(response.data)});
	    });
	    axios.get("http://vcm-7272.vm.duke.edu:5000/" + this.state.user_email + "/user_action").then( (response) =>{
		    console.log(response.status);
		    this.setState({"user_action": JSON.stringify(response.data)});
	    });
	    axios.get("http://vcm-7272.vm.duke.edu:5000/" + this.state.user_email + "/latency").then( (response) =>{
		    console.log(response.status);
		    this.setState({"latency": JSON.stringify(response.data)});
	    });

	    axios.get("http://vcm-7272.vm.duke.edu:5000/" + this.state.user_email + "/timestamps").then( (response) =>{
		    console.log(response.status);
		    this.setState({"time_stamp": JSON.stringify(response.data)});
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
			     {this.state.user_action}
			     {this.state.latency}
			     {this.state.time_stamp}
			     </div>
		   );
    }
}

export default TextFieldGet

