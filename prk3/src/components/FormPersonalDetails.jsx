import React, { Component } from "react";
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';

// import { TextField, AppBar } from '@mui/material/AppBar';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class FormPersonalDetails extends Component {
  render() {
    const { values, handleChange,back,continues } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" iconClassNameLeft />
          <h3>Enter Personal Details</h3>
          <TextField
          placeholder="Enter Your Occupation"
            hintText=""
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
          placeholder="Enter Your City"
            hintText=""
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
          placeholder="Enter Your Bio"
            hintText=""
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <div style={{display: "flex"}}>
            <ArrowBackIcon
              onClick={back}
              fontSize="large"
              className="nextMenu"
            />
            <ArrowForwardIcon
              onClick={continues}
              fontSize="large"
              className="nextMenu"
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default FormPersonalDetails;