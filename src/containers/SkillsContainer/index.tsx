import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import ReactGA from "react-ga";
import SkillItem from "components/SkillItem";
import { useFilter } from "providers/FilterProvider";
import { skills } from "data/skills";
import { DataObject } from "typesAndInterfaces/interfaces";

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      textAlign: "left",
    },
  },
  buttonTitle: {
    width: "100%",
    textAlign: "left",
  },
  modalPaper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    padding: "20px",
    [theme.breakpoints.up("xs")]: {
      width: "calc(100% - 60px)",
      top: "10px",
      left: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "400px",
      top: "40%",
      left: "40%",
    },
  },
  skillSubTopic: { textTransform: "uppercase" },
  media: {},
}));

const SkillsContainer: React.FC = () => {
  const classes = useStyles();
  const { filter } = useFilter();
  const [filteredSkills, setFilteredSkills] = useState<DataObject[]>([]);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (!filter) {
      return setFilteredSkills(skills);
    }
    const fuse = new Fuse<DataObject>(skills, {
      keys: ["title", "subtitle", "tags", "comments.info", "type"],
      threshold: 0.0,
      ignoreLocation: true,
    });
    const result = fuse.search(filter);
    if (result.length) {
      setFilteredSkills(result.map((fItem) => fItem.item));
    } else if (filter) {
      setFilteredSkills([]);
    }
  }, [filter]);

  const createModalContent = (d: DataObject) => {
    return (
      <Paper className={classes.modalPaper}>
        <Card>
          {d.image && (
            <CardMedia
              className={classes.media}
              image={d.image}
              title="Contemplative Reptile"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {d.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {Object.entries(d.comments || {})?.map(([key, values]) => (
                <div key={values[0]}>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.skillSubTopic}
                    gutterBottom
                  >
                    {key}
                  </Typography>
                  {values.map((v: string, j: number) => (
                    <Typography variant="body1" key={`${values[0]}-${j}`}>
                      {v}
                    </Typography>
                  ))}
                </div>
              ))}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    );
  };
  const handleClick = (i: number) => {
    ReactGA.modalview(`skills/${filteredSkills[i].title}`);
    setModalContent(createModalContent(filteredSkills[i]));
  };
  const handleClose = () => {
    setModalContent(null);
  };
  return (
    <>
      <Typography variant="h5">Skills</Typography>

      <Grid container className="filter">
        {filteredSkills.length > 0 &&
          filteredSkills.map((s, i) => {
            return (
              <Grid item key={s.title} xs={6} lg={3}>
                <SkillItem {...s} onClick={handleClick} id={i} />
              </Grid>
            );
          })}
        {filteredSkills.length == 0 && (
          <Typography variant="subtitle1">
            No work items match your filter
          </Typography>
        )}
        <Modal open={modalContent ? true : false} onClose={handleClose}>
          {modalContent ? modalContent : <div></div>}
        </Modal>
      </Grid>
    </>
  );
};
export default SkillsContainer;
