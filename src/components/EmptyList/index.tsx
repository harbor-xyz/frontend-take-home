import React from "react";
import "./style.scss";
import { useActions } from "../../hooks/useActions";

const EmptyList = () => {
  const { filterList } = useActions();
  return (
    <div className="empty-list--wrapper">
      <div className="empty-list__content">
        No Data Found
        <button onClick={() => filterList("all")}>Clear Filter</button>
      </div>
    </div>
  );
};

export default EmptyList;
