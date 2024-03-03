import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export class FormUserDetails extends Component {
  render() {
    const { values, handleChange, continues } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" iconClassNameLeft />
          <h2>Enter User Details</h2>
          <TextField
            placeholder="Enter Your First Name"
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            placeholder="Enter Your last Name"
            hintText=""
            floatingLabelText="last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            hintText=""
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <ArrowForwardIcon
            onClick={continues}
            fontSize="large"
            className="nextMenu"
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
