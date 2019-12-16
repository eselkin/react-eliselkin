import React, { Component } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filter } from "../../redux-actions/filter";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import "./Filter.scss";
import ReactGA from "react-ga";
import debounce from "lodash/debounce";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.changeFilter = this.changeFilter.bind(this);
  }
  sendEvent = debounce(action => {
    ReactGA.event({
      category: "filter",
      action
    });
  }, 400);
  
  changeFilter(e) {
    this.sendEvent(e.target.value);
    this.props.filter(e.target.value);
  }
  render() {
    return (
      <Grid container className="filter">
        <Grid item xs={false} sm={false} md={1}></Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Input
            placeholder="filter by"
            fullWidth
            onChange={this.changeFilter}
          />
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  const { router } = state;
  return {
    router
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      push, // To dispatch location changes
      filter
    },
    dispatch
  );
};

Filter = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
