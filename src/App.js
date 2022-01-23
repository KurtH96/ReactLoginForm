import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import LoginModule from "./ui/login/LoginModule";


// Root component, main entry to React application
class App extends Component {
  constructor(props) {
    super(props);
	
	// "Global State", TODO: Look into Hooks
    this.state = {
      username: '',
	  password: ''
    };
	
	// Binds functions to this component
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // Base function for input field changes
  handleChange(event) {
	this.setState({ [event.target.name]: event.target.value });
  }
  
  // Base function for handling form submit action
  handleSubmit(event) {
	alert('A username was submitted: ' + this.state.username + '\nA Password was submitted: ' + this.state.password);
	event.preventDefault();
  }
  
  render(){
    return(
      <div className="App">
	   { /* Custom form componet with callback functions as props */ }
        <LoginModule
		  onHandleChange={this.handleChange}
		  onHandleSubmit={this.handleSubmit}
		/>
      </div>
    );
  }
}

export default hot(module)(App);