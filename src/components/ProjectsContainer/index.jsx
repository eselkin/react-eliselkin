import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";
import Project from "../Project";
import makeStyles from "@material-ui/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  projects: {
    marginTop: "30px",
  },
}));

const ProjectsContainer = ({ projectsState }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.projects}>
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h5" gutterBottom>
          Projects
        </Typography>
      </Grid>
      {projectsState.map((p) => {
        return (
          <Grid item key={`GRID-P-${p.title}`} xs={12} sm={12} md={6}>
            <Project {...p} />
          </Grid>
        );
      })}
    </Grid>
  );
};
const mapStateToProps = (state) => {
  const { filter } = state;
  return {
    projectsState: filter.projects,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
