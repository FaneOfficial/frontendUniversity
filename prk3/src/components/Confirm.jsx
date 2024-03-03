import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import { ListItem, List } from '@mui/material/AppBar';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export class Confirm extends Component {
  render() {
    const {
      values,
      continues,
      back,
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="" iconClassNameLeft />
          <h2>Confirm User Details</h2>
          {Object.entries(values).map(([key, value]) => {
            return (
              <div >
                <h4>{key}</h4>
                <p>{value}</p>
              </div>
            );
          })}
          <br />
          <div style={{ display: "flex" }}>
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
export default Confirm;
