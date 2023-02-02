import React, { useState } from "react";
import "./styles.scss";
import { ICONS } from "../../constants/icon-constants";
import Dropdown from "../Dropdown";
import SorterAndFilterItem from "../SorterFilterItem";
import { Status } from "../../typings/models.d";
import { ICON_MAPPING } from "../../constants/common";

const Filter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const filterList = [
    {
      item: (
        <SorterAndFilterItem
          text="All"
          icon={<ICONS.AllStatusIcon />}
          state="all"
        />
      ),
      id: "0",
    },
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
          text="Cloning (0)"
          icon={<ICONS.CloneIcon />}
          state={Status.CLONING}
        />
      ),
      id: "6",
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

    {
      item: (
        <SorterAndFilterItem
          text="Stopped (1)"
          icon={<ICONS.KilledIcon />}
          state={Status.STOPPED}
        />
      ),
      id: "7",
    },
  ];
  const dropdownCloseHandler = () => {
    setShowDropdown(false);
  };
  const filterItemClickHandler = (id: string) => {
    console.log(id);
    dropdownCloseHandler();
  };
  const filterSelected = {
    id: "6",
    state: Status.CLONING,
    text: "Cloning",
  };
  const Icon = ICON_MAPPING[filterSelected.state] ?? null;
  return (
    <div className={`filter--wrapper ${filterSelected.state.toLowerCase()}`}>
      <label
        className="filter__label"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Filter by:
        <span className="selected__filter">
          <Icon className="selected__filter--icon" />
          <span>{filterSelected.text}</span>
          <ICONS.ArrowDown className="label__arrow" />
        </span>
      </label>
      <Dropdown
        list={filterList}
        show={showDropdown}
        selected={filterSelected.id}
        closeHandler={dropdownCloseHandler}
        clickHandler={filterItemClickHandler}
      />
    </div>
  );
};

export default Filter;
