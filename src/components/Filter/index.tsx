import React, { useState } from "react";
import "./styles.scss";
import { ICONS } from "../../constants/icon-constants";
import Dropdown from "../Dropdown";
import SorterAndFilterItem from "../SorterFilterItem";
import { FilterList, ICON_MAPPING } from "../../constants/common";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getFilterCount } from "../../utils/filter.utils";
import { useActions } from "../../hooks/useActions";
import { Status } from "../../typings/models.d";

const Filter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: originalDataList, filterSelection } = useTypedSelector(
    (state) => state.testNets
  );
  const { filterList } = useActions();
  const filters = FilterList.map(({ text, id, state, icon }) => {
    const Icon = icon;
    const filterCount = getFilterCount(id, originalDataList);
    const modText = `${text} (${filterCount})`;
    return {
      item: (
        <SorterAndFilterItem text={modText} icon={<Icon />} state={state} />
      ),
      id,
    };
  });

  const dropdownCloseHandler = () => {
    setShowDropdown(false);
  };
  const filterItemClickHandler = (id: string) => {
    dropdownCloseHandler();
    if (id === filterSelection) return;
    filterList(id as Status | "all");
  };

  const Icon =
    filterSelection === "all"
      ? ICONS.AllStatusIcon
      : ICON_MAPPING[filterSelection];
  const selectedFilterText = FilterList.find(
    (a) => a.id === filterSelection
  )?.text;
  return (
    <div className={`filter--wrapper ${filterSelection.toLowerCase()}`}>
      <label
        className="filter__label"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Filter by:
        <span className="selected__filter">
          <Icon className="selected__filter--icon" />
          <span>{selectedFilterText}</span>
          <ICONS.ArrowDown className="label__arrow" />
        </span>
      </label>
      <Dropdown
        list={filters}
        show={showDropdown}
        selected={filterSelection}
        closeHandler={dropdownCloseHandler}
        clickHandler={filterItemClickHandler}
      />
    </div>
  );
};

export default Filter;
