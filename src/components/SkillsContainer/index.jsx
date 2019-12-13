import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";
import Skill from "../Skill";

class SkillsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container className="filter">
        {this.props.skillsState.map(s => {
          return (
            <Grid item key={s.title} xs={12} sm={12} md={6}>
              <Skill {...s} />
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
    skillsState: filter.skills
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

SkillsContainer = connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);
export default SkillsContainer;
