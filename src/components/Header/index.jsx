import React from "react";
import Grid from "@material-ui/core/Grid";
import headshot from "../../assets/headshot.jpg";
import { makeStyles } from "@material-ui/core/styles";
import "./Header.scss";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  headshot: {
    maxHeight: "200px",
    borderRadius: 15,
    minWidth: "50px",
    maxWidth: "100%",
  },
  header: {
    alignItems: "flex-start",
    alignContent: "flex-end",
    flexGrow: 1
  }
}));
export default function Header({ spacing }) {
  const classes = useStyles();
  return (
    <Grid container spacing={spacing} className={classes.header}>
      <Grid item xs={12} sm={3} md={2}>
        <img
          src={headshot}
          className={classes.headshot}
          alt="Headshot of Eli Selkin"
        />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <div className="title">Eli J. Selkin LCSW, MS</div>
        <div className="subtitle">BBS CA# LCS27109</div>
        <div className="objective">
          <span className="objective-title">Objective:</span> To obtain a Ph.D.
          in Computational Neuroscience and conduct research in the area of
          neurological or psychiatric disorders.
        </div>
        <Typography variant="caption">
          Looking for contract positions, please contact me at{" "}
          <a href="mailto:me@eliselkin.com">me@eliselkin.com</a>
        </Typography>
      </Grid>
    </Grid>
  );
}
