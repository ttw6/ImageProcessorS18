import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './Title.js';
import ButtonHome from './ButtonHome.js';
import ButtonInfo from './ButtonInfo.js';
import ButtonCreators from './ButtonCreators.js';
import TeamInfo from './TeamPic.js';
import Basic from './TrialUp.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			"indicator": 1,
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
				  <Basic/> 
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
				  
				  </div>
				 );
	  }

	  else {
		  return(
				  <div>

				  <SimpleAppBar />
				  
				  <ButtonHome onClickButton={this.onButtonChange}/> <ButtonInfo onClickButton={this.onButtonChange}/>
				  <ButtonCreators onClickButton={this.onButtonChange}/>
				  
				  <TeamInfo />
				  </div>
			);


	  }
  }
}


export default App;




