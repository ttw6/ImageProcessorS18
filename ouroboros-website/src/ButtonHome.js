import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';


const styles = {

        button: {
              boxShadow: 'yes',
	      textTransform: 'none',
	      borderRadius: 2,
              fontSize: 15,
              padding: '6px 12px',
              border: '2px solid',
              backgroundColor: '#90caf9',
	      borderColor:'#5d99c6',
        },
	relative: {
	      position: 'absolute',
	      left: '25px',
	      top: '75px',

	},
}

class ButtonHome extends React.Component {
	constructor() {
		super();
		this.state = {
			"indicator": 1,
		}
	}

	onButtonClick = (event) => {
		console.log(this.state.indicator);
		this.props.onClickButton(this.state.indicator);
	}

	render() {
		return (
				<div style={styles.relative}>
				<Button variant="raised" style={styles.button} onClick={this.onButtonClick}>
				Home
				</Button>
				</div>
		       );
	}
}

export default withStyles(styles)(ButtonHome);
