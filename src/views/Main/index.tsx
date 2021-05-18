import React from "react";
import Grid from "@material-ui/core/Grid";
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter";
import WorkContainer from "../../containers/WorkContainer";
import EducationContainer from "../../containers/EducationContainer";
import SkillsContainer from "../../containers/SkillsContainer";
import ProjectsContainer from "../../containers/ProjectsContainer";
import { makeStyles } from "@material-ui/core/styles";

import ReactGA from "react-ga";
ReactGA.initialize(
  process.env.NODE_ENV === "development" ? "UA-116313428-1" : "UA-116313428-2"
);
ReactGA.pageview("/");

const useStyles = makeStyles((theme) => ({
  work: {
    order: 1,
    [theme.breakpoints.up("md")]: {
      marginLeft: "16px",
    },
    marginLeft: "0px",
  },
  education: {
    order: 3,
    marginLeft: "0px",
    marginTop: "16px",
    [theme.breakpoints.up("md")]: {
      order: 4,
      marginLeft: "16px",
    },
  },
  skills: {
    order: 4,
    marginLeft: "0px",
    marginTop: "16px",
    [theme.breakpoints.up("md")]: {
      order: 3,
      marginLeft: "32px",
      marginTop: "0px",
    },
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Filter />
      </Grid>
      <Grid item xs={12} md={6} className={classes.work}>
        <WorkContainer />
      </Grid>
      <Grid item xs={12} md={6} className={classes.education}>
        <EducationContainer />
      </Grid>
      <Grid item xs={12} md={5} className={classes.skills}>
        <SkillsContainer />
        <ProjectsContainer />
      </Grid>
    </Grid>
  );
};

export default Main;
