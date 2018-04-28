import React from 'react';
import Team from './Team.jpg';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';


const styles = {
	  img: {
               width: '100%',
	       height: 'auto',
		},

	  desc: {
	       padding:'15',
	       textAlign: 'center',
	       fontSize: '12px',

		},
	  gallery: {
	       margin: '5px',
	       border: '1px solid #000',
	       width:'400px',
	       top: '150px',
	       left: '50px',
	       position: 'absolute',
		   },
	      
};

function TeamInfo(props) {
    const { classes } = props;

	  return (
	      <div className={classes.gallery}>
	      <img src={Team} width='460' height='445' className={classes.img} />
              <div className={classes.desc}> From left to right: Petek Sener, Alex Sheu, and Tiffany Wu </div>
	      </div>
	         );
}

TeamInfo.propTypes = {
	  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamInfo);
