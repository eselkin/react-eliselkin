import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header";
import Filter from "../Filter";
import EducationContainer from "../EducationContainer";
import WorkContainer from "../WorkContainer";
import SkillsContainer from "../SkillsContainer";
import ProjectsContainer from "../ProjectsContainer";
import { Typography } from "@material-ui/core";

class Main extends Component {
  constructor(props) {
    super(props);
    this.spacing = 3;
  }
  render() {
    return (
      <div>
        <Grid container spacing={this.spacing}>
          <Grid item xs={12} small={12}>
            <Header spacing={this.spacing} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Filter spacing={this.spacing} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h5" gutterBottom>Experience</Typography>
            <WorkContainer spacing={this.spacing} />
            <Typography variant="h5" gutterBottom>Education</Typography>
            <EducationContainer spacing={this.spacing} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant="h5" gutterBottom>Skills</Typography>
            <SkillsContainer spacing={this.spacing} />
            <Typography variant="h5" gutterBottom>Projects</Typography>
            <ProjectsContainer spacing={this.spacing} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Main;
