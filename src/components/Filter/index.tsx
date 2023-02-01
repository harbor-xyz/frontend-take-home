import React, { useState } from "react";
import "./styles.scss";
import { ICONS } from "../../constants/icon-constants";
import Dropdown from "../Dropdown";
import SorterAndFilterItem from "../SorterFilterItem";
import { Status } from "../../typings/models.d";

const Filter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const filterList = [
    {
      item: (
        <SorterAndFilterItem
          text="Running (3)"
          icon={<ICONS.TickInCircleIcon />}
          state={Status.RUNNING}
        />
      ),
      id: "1",
    },
    {
      item: (
        <SorterAndFilterItem
          text="Standing up (3)"
          icon={<ICONS.StandingUpIcon />}
          state={Status.STANDING}
        />
      ),
      id: "2",
    },
    {
      item: (
        <SorterAndFilterItem
          text="Updating (1)"
          icon={<ICONS.StandingUpIcon />}
          state={Status.UPDATING}
        />
      ),
      id: "3",
    },
    {
      item: (
        <SorterAndFilterItem
          text="Failed (1)"
          icon={<ICONS.FailedIcon />}
          state={Status.FAILED}
        />
      ),
      id: "4",
    },
    {
      item: (
        <SorterAndFilterItem
          text="Killed (1)"
          icon={<ICONS.KilledIcon />}
          state={Status.KILLED}
        />
      ),
      id: "5",
    },
  ];
  const dropdownCloseHandler = () => {
    setShowDropdown(false);
  };
  const filterItemClickHandler = (id: string) => {
    console.log(id);
    dropdownCloseHandler();
  };
  return (
    <div className="filter--wrapper">
      <label
        className="filter__label"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Filter by:
        <span className="selected__filter">
          <ICONS.AllStatusIcon className="selected__filter--icon" />
          <span>All</span>
          <ICONS.ArrowDown className="label__arrow" />
        </span>
      </label>
      <Dropdown
        list={filterList}
        show={showDropdown}
        selected="1"
        closeHandler={dropdownCloseHandler}
        clickHandler={filterItemClickHandler}
      />
    </div>
  );
};

export default Filter;
