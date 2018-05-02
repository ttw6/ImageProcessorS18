import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './Title.js';
import ButtonHome from './ButtonHome.js';
import ButtonInfo from './ButtonInfo.js';
import ButtonCreators from './ButtonCreators.js';
import TeamInfo from './TeamPic.js';
import TextFieldUp from './TextField.js';
import TextFieldGet from './TextFieldGet.js';


const styles = {
	writeUp: {
			position: 'absolute',
			top: '200px',
			left: '300px',
			
		},
}


class App extends Component {
	constructor() {
		super();
		this.state = {
			"indicator": 1,
			"user_email": "",
			"file_name":"",
		};
	}

	onButtonChange = (indicatorValue) => {
		this.setState({"indicator": indicatorValue});
	}


  render() {
	  if (this.state.indicator === 1) {
		  return(
				  <div>
				  
				  <SimpleAppBar/>
				 
				  <ButtonHome onClickButton={this.onButtonChange}/>
				  <ButtonInfo onClickButton={this.onButtonChange}/>
				  <ButtonCreators onClickButton={this.onButtonChange}/>
				  <TextFieldUp />
				  
				  </div>
				 );

	  }

	  else if (this.state.indicator ===2) {
		  return(
				  <div>
				  
				  <SimpleAppBar />
				  
				  <ButtonHome onClickButton={this.onButtonChange}/>
				  <ButtonInfo onClickButton={this.onButtonChange}/>
				  <ButtonCreators onClickButton={this.onButtonChange}/>
				  
				  <TextFieldGet />

				  </div>
				 );
	  }

	  else if (this.state.indicator ==3) {
		  return(
				  <div>

				  <SimpleAppBar />
				  
				  <ButtonHome onClickButton={this.onButtonChange}/> <ButtonInfo onClickButton={this.onButtonChange}/>
				  <ButtonCreators onClickButton={this.onButtonChange}/>
				  
				  <TeamInfo />
				  <p style={styles.writeUp}>
				  Alex Sheu is a senior majoring in biomedical engineering and minoring in computer science. He was raised in Taiwon for the first 18 years of his life till he came to Duke. He enjoys meeting meeting new people and spending time with friends. His favourite food is turkey.

				 Petek Sener is a senior majoring in biomedical engineering and minoring in neuroscience. Petek enjoys watching anime and going to the gym. Her favourite food is cereal.

				Tiffany Wu is a senior majoring in biomedical engineering and minoring in pyschology.Tiffany enjoys greek mythology and astronomy. Her favourite food is green tea ice-cream. 


				  </p>
				  </div>
			);
	  }

  }
}


export default App;




