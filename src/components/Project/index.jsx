import React, { useState } from "react";
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import Modal from "@material-ui/core/Modal"
import Typography from "@material-ui/core/Typography"
import Avatar from "react-avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import format from "date-fns/format";
import "./Project.scss";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme) => ({
    button: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
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
  projectButtonDiv: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    alignItems: "flex-start"
  },
  projectButtonTitle: {},
  projectButtonDates: {
    
  },
  media: {
    height: 140,
    width: 140,
  },
}));

export default function Project({ image, title, comments, from, to }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    ReactGA.modalview(`projects/${title}`);
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const classes = useStyles();
  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Card justify="left" className={classes.modalcard}>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardHeader title={title}></CardHeader>
          <CardContent>
            {comments.map((c, i) => {
              return (
                <Typography variant="body1" key={`${title}-${c.type}`}>
                  {c.value}
                </Typography>
              );
            })}
          </CardContent>
        </Card>
      </Modal>
      <Button startIcon={<Avatar src={image} size="36"/>} onClick={handleOpen} className={classes.button}>
        <div className={classes.projectButtonDiv}>
          <Typography variant="body1" className={classes.projectButtonTitle}>{title}</Typography>
          <Typography variant="caption" className={classes.projectButtondates}>
            {format(from, ["MM/yyyy"], [])}-
            {to ? format(to, ["MM/yyyy"], []) : "present"}
          </Typography>
          </div>
      </Button>
    </>
  );
}
