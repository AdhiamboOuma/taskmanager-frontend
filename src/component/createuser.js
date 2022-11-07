/*import React, {Component} from "react";
class CreateUser extends Component {
  render () {
    return (
      <div>
        <p> create user component</p>
      </div>
    );
  }
}
export default CreateUser; */

import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      age: "",
    };
  }
handleName = (event) => {
  this.setState ({
    name: event.target.value,
  });
};
  handleEmail = (event) => {
    this.setState ({
      email: event.target.value,
    });
};
handlePassword = (event) => {
  this.setState ({
    password: event.target.value,
  });
};
handleAge = (event) => {
  this.setState ({
    age: event.target.value,
  });
};

handleSubmit = event => {
  event.preventDefault()
    const userObject =  {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      age: this.state.age,
    };
    axios 
    .post("http://localhost:8080/users", userObject)
    .then((response) => {
      console.log(response.data);
      this.props.history.push ("/");
    })
    .catch ((error) => {
      console.log(error);
    });
};

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text"
             placeholder="name" 
             value={this.state.name} 
             onChange={this.handleName}
             />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmail}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="text" placeholder="age" value={this.state.age} onChange={this.handleAge}/>
          </div>
          <button>Create-user</button>
        </form>
      </div>
    );
  }
}
export default CreateUser;

//the class component requires that you import React with the component library -you must extend the component
