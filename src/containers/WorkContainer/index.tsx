import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { WorkItem } from "components/WorkItem";
import { useFilter } from "providers/FilterProvider";
import { work } from "data/work";
import { DataObject } from "typesAndInterfaces/interfaces";
import Fuse from "fuse.js";
import Typography from "@material-ui/core/Typography";

const WorkContainer: React.FC = () => {
  const [filteredWorkItems, setFilteredWorkItems] = useState<DataObject[]>([]);

  const { filter } = useFilter();
  useEffect(() => {
    if (!filter) {
      return setFilteredWorkItems(work);
    }
    const fuse = new Fuse<DataObject>(work, {
      keys: ["title", "subtitle", "tags", "comments.accomplishments"],
      threshold: 0.0,
      ignoreLocation: true,
    });
    const result = fuse.search(filter);
    if (result.length) {
      setFilteredWorkItems(result.map((fItem) => fItem.item));
    } else if (filter) {
      setFilteredWorkItems([]);
    }
  }, [filter]);
  return (
    <>
      <Typography variant="h5">Experience</Typography>
      <Grid container className="filter">
        {filteredWorkItems.length > 0 &&
          filteredWorkItems.map((w) => {
            return (
              <Grid item key={w.title} xs={12}>
                <WorkItem {...w} />
              </Grid>
            );
          })}
        {filteredWorkItems.length == 0 && (
          <Typography variant="subtitle1">
            No work items match your filter
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default WorkContainer;
