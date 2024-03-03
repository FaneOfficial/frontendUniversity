import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  // Proceed to next step
  continues = (e) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  back = (e) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    // const [data, setData] = React.useState({});
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <div
            style={{
              backgroundColor: "white",
              width: 300,
              height: 300,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormUserDetails
              handleChange={this.handleChange}
              values={values}
              continues={this.continues}
            />
          </div>
        );
      case 2:
        return (
          <div
            style={{
              backgroundColor: "white",
              width: 300,
              height: 300,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormPersonalDetails
              handleChange={this.handleChange}
              values={values}
              back={this.back}
              continues={this.continues}
            />
          </div>
        );
      case 3:
        return (
          <div
            style={{
              backgroundColor: "white",
              width: 300,
              height: "auto",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Confirm
              values={values}
              back={this.back}
              continues={this.continues}
            />
          </div>
        );
      case 4:
        return (
          <div
            style={{
              backgroundColor: "white",
              width: 300,
              height: 300,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Success />
          </div>
        );
    }
  }
}

export default UserForm;
