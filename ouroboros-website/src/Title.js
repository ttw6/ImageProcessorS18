import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
const styles = {
	  root: {
		flexGrow: 1,
		},
	  body: {
			backgroundColor: '#90caf9'
		},
	  
};

function SimpleAppBar(props) {
	  const { classes } = props;
	    return (
			        <div className={classes.root}>
				      <AppBar position="static" className={classes.body}>
				              <Toolbar>
					                <Typography variant="title">
							        Welcome To Ouroboros Image Processor
				                        </Typography>
			                      </Toolbar>
				      </AppBar>
			        </div>
		 );
}

SimpleAppBar.propTypes = {
	  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);

