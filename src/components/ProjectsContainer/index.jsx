import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";
import Project from "../Project";

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container className="filter">
        {this.props.projectsState.map(p => {
          return (
            <Grid item key={p.title} xs={12} sm={12} md={6}>
              <Project {...p} />
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
    projectsState: filter.projects
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

ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
export default ProjectsContainer;
