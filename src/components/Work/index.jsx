import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import format from "date-fns/format";
import "./Work.scss";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  leftgrid: {
    textAlign: "left",
  },
  rightgrid: {
    textAlign: "left",
    [theme.breakpoints.up("xs")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "10px",
    },
  },
  itemimage: {
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  itemdates: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.70rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.60rem",
    },
  },
  itemcontent: {},
});
class Work extends React.Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Grid container spacing={1} justify="left">
            <Grid
              item
              xs={2}
              sm={2}
              md={1}
              lg={1}
              className={this.classes.leftgrid}
              justify="left"
            >
              <img
                src={this.props.image}
                className={this.classes.itemimage}
                alt={this.props.subtitle}
              />
              <Typography className={this.classes.itemdates} variant="caption">
                {format(this.props.from, ["MM/yyyy"], [])}-
                {this.props.to
                  ? format(this.props.to, ["MM/yyyy"], [])
                  : "present"}
              </Typography>
            </Grid>
            <Grid
              item
              xs={9}
              sm={9}
              className={this.classes.rightgrid}
              justify="left"
            >
              <Typography variant="subtitle1">
                <a href={this.props.link}>{this.props.title}</a>
              </Typography>
              <Typography variant="subtitle2">{this.props.subtitle}</Typography>
              <div style={{ textAlign: "left" }}>
                {this.props.comments.map((c, i) => {
                  if (c.type === "Accomplishments") {
                    return (
                      <ul key={`A-${i}`}>
                        {c.value.map((v, j) => {
                          return <li key={`A-${i}-${j}`}>{v}</li>;
                        })}
                      </ul>
                    );
                  }
                  return <div key={`No-accomplishments`} />;
                })}
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(Work);
