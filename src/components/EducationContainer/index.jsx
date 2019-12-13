import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";
import Education from "../Education";

class EducationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container className="filter">
        {this.props.ecducationState.map(e => {
          return (
            <Grid item key={e.title} xs={12}>
              <Education {...e} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  const { filter } = state;
  return {
    ecducationState: filter.education
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      push // To dispatch location changes
    },
    dispatch
  );
};

EducationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationContainer);
export default EducationContainer;
