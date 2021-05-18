import React, { MouseEvent } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
  popper: {},
}));

export interface DataObjectPopper extends DataObject {
  onClick: (i: number, event: MouseEvent<HTMLButtonElement>) => void;
  id: number;
}
const SkillItem: React.FC<DataObjectPopper> = ({
  title,
  subtitle,
  image,
  comments,
  from,
  to,
  link,
  id,
  onClick,
}: DataObjectPopper) => {
  const classes = useStyles();
  return (
    <>
      <Button
        type="button"
        onClick={(event) => {
          onClick(id, event);
        }}
        aria-describedby={`${id}-popper`}
        className={classes.buttonTitle}
      >
        {title}
      </Button>
    </>
  );
};
export default SkillItem;
