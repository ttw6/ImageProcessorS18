import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './Title.js';
import ButtonHome from './ButtonHome.js';
import ButtonInfo from './ButtonInfo.js';
import ButtonCreators from './ButtonCreators.js';


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
	  if (this.indicator === 1) {
		  return(
				  <div>
				  
				  <SimpleAppBar/>
				 1
				  <ButtonHome onClickButton={this.onButtonChange}/>
				  <ButtonInfo onClickButton={this.onButtonChange}/>
				  <ButtonCreators onClickButton={this.onButtonChange}/> 
				  </div>
				 );

	  }

	  else if (this.indicator ===2) {
		  return(
				  <div>
				  
				  <SimpleAppBar />
				  2
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
				  3
				  <ButtonHome onClickButton={this.onButtonChange}/>
				  <ButtonInfo onClickButton={this.onButtonChange}/>
				  <ButtonCreators onClickButton={this.onButtonChange}/>
				  </div>
			);


	  }
  }
}


export default App;




