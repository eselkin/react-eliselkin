import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import EducationItem from "../../components/EducationItem";
import { useFilter } from "providers/FilterProvider";
import { education } from "data/education";
import { DataObject } from "typesAndInterfaces/interfaces";
import Fuse from "fuse.js";
import { Typography } from "@material-ui/core";

const EducationContainer: React.FC = () => {
  const [filteredEducationItems, setFilteredEducationItems] = useState<
    DataObject[]
  >([]);

  const { filter } = useFilter();
  useEffect(() => {
    if (!filter) {
      return setFilteredEducationItems(education);
    }
    const fuse = new Fuse<DataObject>(education, {
      keys: ["title", "subtitle", "tags", "comments.value"],
      threshold: 0.0,
      ignoreLocation: true,
    });
    const result = fuse.search(filter);
    if (result.length) {
      setFilteredEducationItems(result.map((fItem) => fItem.item));
    } else if (filter) {
      setFilteredEducationItems([]);
    }
  }, [filter]);

  return (
    <>
      <Typography variant="h5">Education</Typography>
      <Grid container className="filter">
        {filteredEducationItems.length > 0 &&
          filteredEducationItems.map((e) => {
            return (
              <Grid item key={e.title} xs={12}>
                <EducationItem {...e} />
              </Grid>
            );
          })}
        {filteredEducationItems.length == 0 && (
          <Typography variant="subtitle1">
            No work items match your filter
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default EducationContainer;
