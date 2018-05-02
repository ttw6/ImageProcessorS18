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

	  writeUp: {
	        position: 'absolute',
		top: '50px',
		left: '450px',
		width: '600px',
		fontSize: '15px',
                word_wrap: 'break-word',

		   },

	  
	  writeUp2: {
	        position: 'absolute',
		top: '130px',
		left: '450px',
		width: '600px',
		fontSize: '15px',
                word_wrap: 'break-word',

		   },
	
	  writeUp3: {
	        position: 'absolute',
		top: '210px',
		left: '450px',
		width: '600px',
		fontSize: '15px',
                word_wrap: 'break-word',

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
	       <p style={styles.writeUp2}>
	       Alex Sheu is a senior majoring in biomedical engineering and minoring in computer science at Duke University. He was raised in Taiwon for the first 18 years of his life till he came to Duke. His favourite food is turkey.

	       </p>
	       <p style={styles.writeUp}>
	       Petek Sener is a senior majoring in biomedical engineering and minoring in neuroscience at Duke University. Petek enjoys watching anime and going to the gym. Her favourite food is cereal.

	       </p>

	       <p style={styles.writeUp3}>
	       Tiffany Wu is a senior majoring in biomedical engineering and minoring in pyschology at Duke University.Tiffany enjoys Greek mythology and astronomy. Her favourite food is green tea ice-cream.
	       </p>
	      </div>
	         );
}

TeamInfo.propTypes = {
	  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamInfo);
