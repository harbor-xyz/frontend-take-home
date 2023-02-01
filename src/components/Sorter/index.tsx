import React, { useState } from "react";
import "./styles.scss";
import { ICONS } from "../../constants/icon-constants";
import Dropdown from "../Dropdown";
import SorterAndFilterItem from "../SorterFilterItem";

const Sorter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const sorterList = [
    {
      item: <SorterAndFilterItem text="Name A-Z" />,
      id: "1",
    },
    {
      item: <SorterAndFilterItem text="Name Z-A" />,
      id: "2",
    },
    {
      item: <SorterAndFilterItem text="Status" />,
      id: "3",
    },
    {
      item: <SorterAndFilterItem text="Date Created" />,
      id: "4",
    },
    {
      item: <SorterAndFilterItem text="Last Modified" />,
      id: "5",
    },
  ];

  const dropdownCloseHandler = () => {
    setShowDropdown(false);
  };
  const sorterItemClickHandler = (id: string) => {
    console.log(id);
    dropdownCloseHandler();
  };
  return (
    <div className="sorter--wrapper">
      <label
        className="sorter__label"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Sort by:
        <span className="selected__sorter">
          <span>Status</span>
          <ICONS.ArrowDown className="label__arrow" />
        </span>
      </label>
      <Dropdown
        show={showDropdown}
        closeHandler={dropdownCloseHandler}
        clickHandler={sorterItemClickHandler}
        list={sorterList}
        selected="3"
      />
    </div>
  );
};

export default Sorter;
