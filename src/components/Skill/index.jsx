import React, { Component } from "react";
import { Card, CardContent, Grid, Modal, CardHeader } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./Skill.scss";

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
  proficiency: {
    marginTop: 10,
    textAlign: "left"
  }
});

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
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
          <Card className={classes.modalcard}>
            <CardHeader title={this.props.title} />
            <CardContent>
              {this.props.comments.map((comment, i) => {
                if (comment.type === "Info") {
                  return (
                    <div key={`${comment.type}-${i}`} className="modal-content">
                      {comment.value}
                    </div>
                  );
                } else {
                  if (Array.isArray(comment.value)) {
                    return (
                      <Grid
                        container
                        className={classes.proficiency}
                        key={`${comment.type}-${i}`}
                      >
                        <Grid item xs={12} md={12}>
                          <div className="modal-sub-heading">
                            {comment.type}
                          </div>
                        </Grid>
                        <Grid item>
                          <ul>
                            {comment.value.map(p => {
                              return <li key={`${p}`}>{p}</li>;
                            })}
                          </ul>
                        </Grid>
                      </Grid>
                    );
                  } else {
                    return (
                      <Grid container spacing={3}>
                        <div className="card-title">{comment.type}</div>
                        <Grid item>
                          <div className="card-subtitle">{comment.value}</div>
                        </Grid>
                      </Grid>
                    );
                  }
                }
              })}
            </CardContent>
          </Card>
        </Modal>
        <Card justify="left" onClick={this.handleOpen}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={10}>
                <div className="card-title">{this.props.title}</div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default withStyles(styles)(Skill);
