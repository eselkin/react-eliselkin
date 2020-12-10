export const FILTERED = "FILTERED";

export const filter = (filter_value) => {
  return { type: FILTERED, filter_value: filter_value.trim() };
};
