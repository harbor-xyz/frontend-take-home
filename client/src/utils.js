import {
  differenceInCalendarYears,
  differenceInCalendarMonths,
  differenceInCalendarWeeks,
  differenceInCalendarDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import pluralize from "pluralize";

// Changes first letter of string to uppercase and remaining letters to lower case
// Example input: RUNNING
// Output: Running
export const firstLetterUppercase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// Calculates time elapsed
export const timeDifference = (date) => {
  const dateLeft = new Date();
  const dateRight = new Date(date);

  let difference = differenceInCalendarYears(dateLeft, dateRight);
  if (difference) {
    return `Modified ${difference} ${pluralize("year", difference)} ago`;
  }

  difference = differenceInCalendarMonths(dateLeft, dateRight);

  if (difference) {
    return `Modified ${difference} ${pluralize("month", difference)} ago`;
  }

  difference = differenceInCalendarWeeks(dateLeft, dateRight);

  if (difference) {
    return `Modified ${difference} ${pluralize("week", difference)} ago`;
  }

  difference = differenceInCalendarDays(dateLeft, dateRight);

  if (difference) {
    return `Modified ${difference} ${pluralize("day", difference)} ago`;
  }

  difference = differenceInHours(dateLeft, dateRight);

  if (difference) {
    return `Modified ${difference} ${pluralize("hour", difference)} ago`;
  }

  difference = differenceInMinutes(dateLeft, dateRight);

  if (difference) {
    return `Modified ${difference} ${pluralize("minute", difference)} ago`;
  }

  return "Modified now";
};

export const sortTestnetByNameAsc = (testnetA, testnetB) => {
  if (testnetA.name > testnetB.name) {
    return 1;
  }
  return -1;
};

export const sortTestnetByNameDesc = (testnetA, testnetB) => {
  if (testnetA.name > testnetB.name) {
    return -1;
  }
  return 1;
};

export const sortTestnetByStatus = (testnetA, testnetB) => {
  if (testnetA.status > testnetB.status) {
    return 1;
  }
  return -1;
};

export const sortTestnetByCreatedDate = (testnetA, testnetB) => {
  if (new Date(testnetA.created_at) > new Date(testnetB.created_at)) {
    return 1;
  }
  return -1;
};

export const sortTestnetByUpdatedDate = (testnetA, testnetB) => {
  if (new Date(testnetA.updated_at) > new Date(testnetB.updated_at)) {
    return -1;
  }
  return 1;
};
