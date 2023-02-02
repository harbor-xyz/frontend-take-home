import { TestNet, SortingOrder } from "../store/models/testnets.d";
import { Sorters } from "../typings/models.d";

export const sortListUtil = (
  list: TestNet[],
  key: Sorters,
  order: SortingOrder
) => {
  switch (key) {
    case "NAME":
      return sortByKey(list, "name", order);
    case "STATUS":
      return sortByKey(list, "status", order);
    case "CREATED":
      return sortByKey(list, "created_at", order);
    case "UPDATED":
      return sortByKey(list, "updated_at", order);
    default:
      return list;
  }
};

function sortByKey(array: TestNet[], key: keyof TestNet, order: SortingOrder) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    if (order === "ASC") {
      return x < y ? -1 : x > y ? 1 : 0;
    } else {
      return x < y ? 1 : x > y ? -1 : 0;
    }
  });
}
