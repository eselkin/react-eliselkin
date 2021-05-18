import React from "react";
import { Button } from "@material-ui/core";
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
const SkillItem: React.FC<DataObjectPopper> = ({
  title,
  id,
  onClick,
}: DataObjectPopper) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.button}>
      <Button
        type="button"
        onClick={() => {
          onClick(id);
        }}
        className={classes.buttonTitle}
      >
        {title}
      </Button>
    </Grid>
  );
};
export default SkillItem;
