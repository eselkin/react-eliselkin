import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Skill from "../Skill";

class SkillsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        this.props.skillsState.map(s => {
          return (
              <Skill {...s} />
          );
        })
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
