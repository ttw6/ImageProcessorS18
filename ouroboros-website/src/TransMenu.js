import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
	  root: {
			    display: 'flex',      
                            flexWrap: 'wrap',
        },

        formControl: {
			         margin: theme.spacing.unit,
                                 minWidth: 120,
        },

        selectEmpty: {
			         marginTop: theme.spacing.unit * 2,
        },
});

class SimpleSelect extends React.Component {
	constructor() {
		super();
	        this.state = {
		      "user_email": '',
		      "image_name": '',
		      "filter":[],

			    };
	}


	  handleChange = event => {
		  this.setState({ [event.target.name]: event.target.value });
		  console.log(this.state.filter);
		  console.log(this.state.image_name);
         };

	 render() {
		 const { classes } = this.props;	  
	         return (
			 <form className={classes.root} autoComplete="off">				 
			 <FormControl className={classes.formControl}>
	                 <InputLabel htmlFor="trans-helper">Transformation</InputLabel>
			 <Select
			 value={this.state.filter}
			 onChange={this.handleChange}
			 input={<Input name="filter" id="trans-helper" />}
			 >
			 <MenuItem value="">
			 <em>None</em>
			 </MenuItem>
			 <MenuItem value={1}>Histogram Equalization</MenuItem>
			 <MenuItem value={2}>Contrast Streching</MenuItem>
			 <MenuItem value={3}>Log Compression</MenuItem>
			 <MenuItem value={4}>Reverse Video</MenuItem>
			 </Select>
			 <FormHelperText>Poop important helper text</FormHelperText>
			 </FormControl>
			 
			 <FormControl className={classes.formControl}>
			 <InputLabel htmlFor="name-input">Name</InputLabel>
			 <Input id="name-input" />
			 <FormHelperText>Hello</FormHelperText>
			 </FormControl>
			 </form>
	 },
}



SimpleSelect.propTypes = {
	  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
