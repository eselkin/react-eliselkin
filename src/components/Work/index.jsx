import React, { Component } from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import format from "date-fns/format";
import "./Work.scss";

class Work extends Component {
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
                  <img
                    src={this.props.image}
                    className="avatar"
                    alt={this.props.subtitle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <span className="card-dates">
                    {format(this.props.from, ["MM/yyyy"], [])}-
                    {this.props.to
                      ? format(this.props.to, ["MM/yyyy"], [])
                      : "present"}
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <div className="card-title">
                <a href={this.props.link}>{this.props.title}</a>
              </div>
              <div className="card-subtitle">{this.props.subtitle}</div>
              <div style={{ textAlign: "left" }}>
                {this.props.comments.map((c, i) => {
                  if (c.type === "Accomplishments") {
                    return (
                      <ul key={`A-${i}`}>
                        {c.value.map((v, j) => {
                          return <li key={`A-${i}-${j}`}>{v}</li>;
                        })}
                      </ul>
                    );
                  }
                  return <div />;
                })}
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
export default Work;
