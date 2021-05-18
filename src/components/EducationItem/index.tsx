import React from "react";
// import ReactGA from "react-ga";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import format from "date-fns/format";
import { makeStyles } from "@material-ui/core/styles";
import { DataObject } from "typesAndInterfaces/interfaces";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/icons/ChevronRight";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  leftgrid: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      display: "flex",
      flexDirection: "column",
    },
  },
  rightgrid: {
    textAlign: "left",
    [theme.breakpoints.up("xs")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "10px",
    },
  },
  itemimage: {
    height: "auto",
    width: "40%",
    minWidth: "60px",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
  },
  itemcontent: {},
  itemlink: {
    textDecoration: "none",
  },
  accSummary: {
    backgroundColor: "#EFEFFF",
    textTransform: "uppercase",
  },
  avatar: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },

    [theme.breakpoints.up("md")]: {
      display: "block",
      backgroundColor: "white",
      color: "black",
      textAlign: "right",
    },
  },
  li: {
    [theme.breakpoints.up("xs")]: {
      margin: "0px",
      padding: "0px",
      alignItems: "flex-start",
      alignContent: "flex-start",
    },
  },
  liAvatar: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },

    [theme.breakpoints.up("md")]: {
      textAlign: "right",
      display: "block",
      marginLeft: -20,
      padding: 0,
    },
  },
  liText: {
    [theme.breakpoints.up("xs")]: {
      margin: "0px",
      padding: "4px",
    },

    [theme.breakpoints.up("md")]: {},
  },
}));

const EducationItem: React.FC<DataObject> = ({
  title,
  subtitle,
  image,
  comments,
  from,
  to,
  link,
}: DataObject) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<number>(-1);

  const handleChange = (panel: number) => (
    event: React.ChangeEvent<unknown>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : -1);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={1} justify="flex-start">
          <Grid item xs={3} md={1} className={classes.leftgrid}>
            <Avatar
              src={image}
              className={`${classes.itemimage}`}
              alt={subtitle || ""}
              variant="rounded"
            />
            {from && (
              <Typography variant="caption" align="center">
                {format(from, "MM/yy", {})}
                {" - "}
                {to ? format(to, "MM/yy", {}) : "present"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={8} md={10} className={classes.rightgrid}>
            <Typography variant="subtitle1">
              <a href={link} className={classes.itemlink}>
                {title}
              </a>
            </Typography>
            <Typography variant="subtitle2">{subtitle || ""}</Typography>
            <div style={{ textAlign: "left" }}>
              {Object.entries(comments || {}).map(([key, values], i) => (
                <Accordion
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                  key={`A-${i}`}
                  aria-label="accomplishments"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id={`A-${i}-header`}
                    className={classes.accSummary}
                  >
                    <Typography variant="subtitle2">{key}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      {Array.isArray(values) &&
                        values.map((v, j) => {
                          return (
                            <ListItem
                              key={`A-${i}-${j}`}
                              className={classes.li}
                            >
                              <ListItemAvatar className={classes.liAvatar}>
                                <ListItemIcon />
                              </ListItemAvatar>
                              <ListItemText
                                primary={v}
                                className={classes.liText}
                              />
                            </ListItem>
                          );
                        })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default EducationItem;
