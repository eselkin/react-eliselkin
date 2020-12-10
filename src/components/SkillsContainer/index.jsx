import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Skill from "../Skill";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  skills: {
    marginTop: "30px",
  },
}));

const SkillsContainer = ({ skillsState }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.skills}>
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
      </Grid>
      {skillsState.map((s) => {
        return (
          <Grid item key={`GRID-P-${s.title}`} xs={12} sm={12} md={6} lg={4}>
            <Skill {...s} key={`Skill-${s.title}`} />
          </Grid>
        );
      })}
    </Grid>
  );
};
const mapStateToProps = (state) => {
  const { filter } = state;
  return {
    skillsState: filter.skills,
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);
