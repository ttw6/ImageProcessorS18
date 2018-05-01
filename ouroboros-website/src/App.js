import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './Title.js';
import ButtonHome from './ButtonHome.js';
import ButtonInfo from './ButtonInfo.js';
import ButtonCreators from './ButtonCreators.js';
import TeamInfo from './TeamPic.js';
// import Basic from './TrialUp.js';
import TextFieldUp from './TextField.js';
import TextFieldGet from './TextFieldGet.js';
// import SimpleSelect from './TransMenu.js';

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

	onTextButton = (textEmail) => {
		console.log(textEmail);
		this.setState({"user_email": textEmail});
	}

	onNameButton = (Name) => {
		console.log(Name);
		this.setState({"file_name": Name});
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
				  </div>
			);
	  }

  }
}


export default App;




