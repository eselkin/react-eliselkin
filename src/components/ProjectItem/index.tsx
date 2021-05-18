import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataObject } from "typesAndInterfaces/interfaces";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  button: {
    padding: 10,
  },
  buttonTitle: {
    width: "100%",
    textAlign: "left",
    backgroundColor: "#EFEFFF",
    boxShadow: "2px 2px 3px 1px lightblue",
  },
}));

export interface DataObjectPopper extends DataObject {
  onClick: (i: number) => void;
  id: number;
}
const ProjectItem: React.FC<DataObjectPopper> = ({
  title,
  image,
  id,
  onClick,
}: DataObjectPopper) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.button}>
      <Button
        startIcon={<Avatar src={image} />}
        type="button"
        onClick={() => {
          onClick(id);
        }}
        aria-describedby={`${id}-popper`}
        className={classes.buttonTitle}
      >
        {title}
      </Button>
    </Grid>
  );
};
export default ProjectItem;
