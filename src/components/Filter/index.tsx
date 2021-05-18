import React, { ChangeEvent } from "react";
import Grid from "@material-ui/core/Grid";
import ReactGA from "react-ga";
import debounce from "lodash/debounce";
import makeStyles from "@material-ui/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import { useFilter } from "providers/FilterProvider";

const useStyles = makeStyles(() => ({
  filter: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  root: {},
}));

export const Filter: React.FC = () => {
  const { searchFor } = useFilter();
  const sendEvent = debounce((filterValue: string) => {
    ReactGA.event({
      category: "filter",
      action: filterValue,
    });
  }, 600);

  const changeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    sendEvent(e.target.value);
    searchFor(e.target.value);
  };

  const classes = useStyles();

  return (
    <Grid container className={classes.filter}>
      <Grid item xs={1} md={3}>
        &nbsp;
      </Grid>
      <Grid item xs={10} md={6}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            placeholder="filter resum&eacute; by"
            variant="outlined"
            fullWidth
            onChange={changeFilter}
          />
        </form>
      </Grid>
    </Grid>
  );
};
