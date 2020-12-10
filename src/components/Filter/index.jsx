import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filter } from "../../redux-actions/filter";
import Grid from "@material-ui/core/Grid";
import "./Filter.scss";
import ReactGA from "react-ga";
import debounce from "lodash/debounce";
import makeStyles from "@material-ui/styles/makeStyles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  filter: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

const Filter = ({ filter }) => {
  const sendEvent = debounce((action) => {
    ReactGA.event({
      category: "filter",
      action,
    });
  }, 400);

  const changeFilter = (e) => {
    sendEvent(e.target.value);
    filter(e.target.value);
  };

  const classes = useStyles();

  return (
    <Grid container className={classes.filter}>
      <Grid item xs={null} sm={2} md={2}></Grid>
      <Grid item xs={12} sm={8} md={8}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            placeholder="filter by"
            variant="outlined"
            fullWidth
            onChange={changeFilter}
          />
        </form>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  const { router } = state;
  return {
    router,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      push, // To dispatch location changes
      filter,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
