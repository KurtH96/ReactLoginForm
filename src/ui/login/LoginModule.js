import React, { Component } from "react";

// Custom Form Component demostrating inverted data flow
class LoginModule extends Component {
  constructor(props) {
    super(props);
	
	// Functions bound to this component, REQUIRED for callbacks to work
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.props.onHandleChange(event)
  }
  
  handleSubmit(event) {
	this.props.onHandleSubmit(event)
  }
  
  render() {
	return (
	  <form onSubmit={this.handleSubmit}>
	    <label> Username: 
		  { /* Value from root component */ }
		  <input name="username"
			     type="text"
				 value={this.props.username}
				 onChange={this.handleChange} />
		</label>
		<br />
		<label> Password: 
		  { /* Value from root component */ }
		  <input name="password"
		         type="text"
				 value={this.props.password}
				 onChange={this.handleChange} />
		</label>
		<br />
        <input type="submit" value="Submit" />		
	  </form>
	);
  }
}

export default LoginModule;