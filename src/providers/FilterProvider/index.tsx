/* eslint-disable no-underscore-dangle */
import React, { createContext, useContext, useState } from "react";

interface IFilterContext {
  filter: string;
  searchFor: (value: string) => void;
}

const FilterContext = createContext<IFilterContext>({
  filter: "",
  searchFor: (value: string) => {
    console.log(value);
  },
});

interface FilterProps {
  children: React.ReactNode;
}

export const useFilter = (): IFilterContext => {
  const { filter, searchFor } = useContext(FilterContext);
  return {
    filter,
    searchFor,
  };
};

export const FilterProvider = ({ children }: FilterProps): JSX.Element => {
  const [filter, setFilter] = useState("");
  const searchFor = (value: string): void => {
    setFilter(value);
  };
  return (
    <FilterContext.Provider
      value={{
        filter,
        searchFor,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
