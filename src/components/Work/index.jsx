import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import format from "date-fns/format";
import "./Work.scss";

export default function Work(props) {
  return (
    <Card justify="left">
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={2} md={1}>
            <Grid container>
              <Grid item xs={12}>
                <img
                  src={props.image}
                  className="avatar"
                  alt={props.subtitle}
                />
              </Grid>
              <Grid item xs={12}>
                <span className="card-dates">
                  {format(props.from, ["MM/yyyy"], [])}-
                  {props.to ? format(props.to, ["MM/yyyy"], []) : "present"}
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <div className="card-title">
              <a href={props.link}>{props.title}</a>
            </div>
            <div className="card-subtitle">{props.subtitle}</div>
            <div style={{ textAlign: "left" }}>
              {props.comments.map((c, i) => {
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
