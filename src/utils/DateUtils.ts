import moment from "moment";

export const TodayDate = (formatStr: string): string => {
  let now = moment();
  return now.format(formatStr);
};
