import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import headshot from "../../assets/headshot.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "42px",
      fontWeight: "400",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "48px",
      fontWeight: "400",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  headshot: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "20px",
    },
    [theme.breakpoints.up("md")]: {},
  },
  avatar: {
    [theme.breakpoints.up("xs")]: {
      width: "160px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "140px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "160px",
    },
    height: "auto",
  },
  header: {
    alignItems: "flex-start",
    alignContent: "flex-end",
    flexGrow: 1,
  },
  text: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
      paddingLeft: "20px",
      paddingRight: "20px",
    },

    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      paddingLeft: "60px",
      paddingRight: "60px",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
}));
export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.header}>
      <Grid xs={12} lg={1} item className={classes.headshot}>
        <Avatar
          src={headshot}
          alt="Headshot of Eli Selkin"
          className={classes.avatar}
          variant="circle"
        />
      </Grid>
      <Grid xs={12} lg={10} item className={classes.text}>
        <Typography variant="h1" className={classes.title}>
          Eli J. Selkin LCSW, MS
        </Typography>
        <Typography variant="subtitle1">BBS CA# LCS27109</Typography>
        <Typography variant="subtitle1">
          <strong>Objective:</strong> To obtain a Ph.D. in Computational
          Neuroscience and conduct research in the area of neurological or
          psychiatric disorders.
        </Typography>
        <Typography variant="caption">
          <a href="mailto:me@eliselkin.com">me@eliselkin.com</a>
        </Typography>
      </Grid>
    </Grid>
  );
};
