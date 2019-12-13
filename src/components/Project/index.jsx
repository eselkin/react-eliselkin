import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Modal,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import format from "date-fns/format";
import "./Project.scss";

const styles = theme => ({
  modalcard: {
    textAlign: "left",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
      top: "5%",
      left: "5%",
      bottom: "5%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
      top: "10%",
      left: "10%",
      bottom: "30%"
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      top: "15%",
      left: "15%",
      bottom: "30%"
    },
    position: "absolute",
    overflowY: "scroll"
  },
  media: {
    height: 140,
    width: 140
  }
});

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const { classes } = this.props;
    return (
      <>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <Card justify="left" className={classes.modalcard}>
            <CardMedia
              className={classes.media}
              image={this.props.image}
              title={this.props.title}
            />
            <CardHeader title={this.props.title}></CardHeader>
            <CardContent>
              {this.props.comments.map((c, i) => {
                return <Typography variant="body1" key={`${this.props.title}-${c.type}`}>{c.value}</Typography>;
              })}
            </CardContent>
          </Card>
        </Modal>
        <Card justify="left" onClick={this.handleOpen}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={4} md={4}>
                <img src={this.props.image} className="avatar" alt={this.props.title} />
              </Grid>
              <Grid item>
                <div className="card-title">{this.props.title}</div>
                <div className="card-dates">
                  {format(this.props.from, ["MM/yyyy"], [])}-
                  {this.props.to
                    ? format(this.props.to, ["MM/yyyy"], [])
                    : "present"}
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </>
    );
  }
}
export default withStyles(styles)(Project);
