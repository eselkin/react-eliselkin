import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Modal,
  CardHeader,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import "./Skill.scss";

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "33%",
    },
  },
  modalcard: {
    textAlign: "left",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
      top: "5%",
      left: "5%",
      bottom: "5%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
      top: "10%",
      left: "10%",
      bottom: "30%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      top: "15%",
      left: "15%",
      bottom: "30%",
    },
    position: "absolute",
    overflowY: "scroll",
  },
  proficiency: {
    marginTop: 10,
    textAlign: "left",
  },
}));

export default function Skill({ title, comments }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    ReactGA.modalview(`skills/${title}`);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const classes = useStyles();
  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Card className={classes.modalcard}>
          <CardHeader title={title} />
          <CardContent>
            {comments.map((comment, i) => {
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
                        <div className="modal-sub-heading">{comment.type}</div>
                      </Grid>
                      <Grid item>
                        <ul>
                          {comment.value.map((p) => {
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
      <Button onClick={handleOpen} className={classes.button}>
        {title}
      </Button>
    </>
  );
}
