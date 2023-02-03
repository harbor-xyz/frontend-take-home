import { TestNet } from "../store/models/testnets";
import { Status } from "../typings/models";

export const filterData = (id: Status | "all", list: TestNet[]): TestNet[] => {
  if (id === "all") {
    return list;
  }
  return list.filter((a) => a.status === id);
};

export const getFilterCount = (id: Status | "all", list: TestNet[]): number => {
  if (id === "all") {
    return list.length;
  }
  return list.reduce((a, e) => {
    if (e.status === id) {
      a++;
    }
    return a;
  }, 0);
};
