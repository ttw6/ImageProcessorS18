import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import indigo from 'material-ui/colors/indigo';


const styles = {

        button: {
              boxShadow: 'yes',
	      textTransform: 'none',
	      borderRadius: 2,
              fontSize: 15,
              padding: '6px 12px',
              border: '2px solid',
              backgroundColor: '#7986cb',
	      borderColor:'#49599a',
        },
}

class ButtonInfo extends React.Component {
	constructor() {
		super();
		this.state = {
			"indicator": 2,
		}
	}

	onButtonClick = (event) => {
		console.log(this.state.indicator);
		this.props.onClickButton(this.state.indicator);
	}

	render() {
		return (
				<div>
				<Button variant="raised" style={styles.button} onClick={this.onButtonClick}>
				Information
				</Button>
				</div>
		       );
	}
}

export default withStyles(styles)(ButtonInfo);
