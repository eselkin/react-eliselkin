import React, { Component } from "react";
import {
  Card,
  CardContent,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import format from "date-fns/format";
import "./Education.scss";

const styles = theme => ({
  expansionlist: {
    textAlign: "left"
  }
})

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: 0 };
    this.handleExpand = this.handleExpand.bind(this);
  }
  handleExpand(panel) {
    this.setState({ expanded: panel });
  }
  render() {
    return (
      <Card justify="left">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={2} md={1}>
              <Grid container>
                <Grid item xs={12}>
                  <img src={this.props.image} className="avatar" alt={this.props.title} />
                </Grid>
                <Grid item xs={12}>
                  <span className="card-dates">
                    {format(this.props.from, ["MM/yyyy"], [])}-
                    {format(this.props.to, ["MM/yyyy"], [])}
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <div className="card-title">
                <a href={this.props.link}>{this.props.title}</a>
              </div>
              <div className="card-subtitle">{this.props.subtitle}</div>
              {this.props.comments.map((c, i) => {
                return (
                  <ExpansionPanel
                    expanded={this.state.expanded === i}
                    onChange={() => this.handleExpand(i)}
                    aria-controls={`${this.props.title}, ${c.type}`}
                    id={`${this.props.title}, ${c.type}`}
                    key={`${this.props.title}, ${c.type}`}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel-${i}-contents`}
                      id={`panel-${i}`}
                    >
                      {c.type}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={this.props.classes.expansionlist}>
                      {Array.isArray(c.value) && (
                        <ul>
                          {c.value.map(item => {
                            return <li key={`${item}`}>{item}</li>;
                          })}
                        </ul>
                      )}
                      {!Array.isArray(c.value) && <div className="card-content">{c.value}</div>}
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                );
              })}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(Education);