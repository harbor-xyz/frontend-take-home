import { testnetsType } from "../fetchTestnetsData";

const sortType = {
  ALPHABETICALLY: "ALPHABETICALLY",
  REVERSE_ALPHABETICALLY: "REVERSE_ALPHABETICALLY",
  STATUS: "STATUS",
  DATE_CREATED: "DATE_CREATED",
  DATE_MODIFIED: "DATE_MODIFIED",
};
export const sortByOptions = [
  { label: "Name A-Z", id: sortType.ALPHABETICALLY },
  { label: "Name Z-A", id: sortType.REVERSE_ALPHABETICALLY },
  { label: "Status", id: sortType.STATUS },
  { label: "Date created", id: sortType.DATE_CREATED },
  { label: "Last modified", id: sortType.DATE_MODIFIED },
];

type SortBy = {
  data: testnetsType[] | null;
  type: string;
};

const sortBy = ({ data, type }: SortBy): testnetsType[] | null => {
  console.log("type", type);
  if (data) {
    if (type === sortType.ALPHABETICALLY) {
      return [...data].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (type === sortType.REVERSE_ALPHABETICALLY) {
      return [...data]
        .sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
        .reverse();
    }

    if (type === sortType.STATUS) {
      return [...data].sort((a, b) => {
        return a.status.localeCompare(b.status);
      });
    }

    if (type === sortType.DATE_MODIFIED) {
      return [...data].sort((a, b) => {
        return a.created_at.localeCompare(b.created_at);
      });
    }

    if (type === sortType.DATE_CREATED) {
      return [...data].sort((a, b) => {
        return a.updated_at.localeCompare(b.updated_at);
      });
    }
  }
  return null;
};

export default sortBy;