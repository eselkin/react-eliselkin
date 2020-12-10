import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";
import Work from "../Work";

class WorkContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container className="filter">
        {this.props.workState.map((w) => {
          return (
            <Grid item key={w.title} xs={12}>
              <Work {...w} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  const { filter } = state;
  return {
    workState: filter.work,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      push, // To dispatch location changes
    },
    dispatch
  );
};

WorkContainer = connect(mapStateToProps, mapDispatchToProps)(WorkContainer);
export default WorkContainer;
