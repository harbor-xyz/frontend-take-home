import React, { useState } from "react";
import "./styles.scss";
import { ICONS } from "../../constants/icon-constants";
import Dropdown from "../Dropdown";
import SorterAndFilterItem from "../SorterFilterItem";
import { SorterList } from "../../constants/common";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Sorters } from "../../typings/models.d";
import { SortingOrder } from "../../store/models/testnets.d";

const Sorter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { sortList } = useActions();
  const { key, order } = useTypedSelector(
    (state) => state.testNets.sortSelection
  );
  const selectedSortId = `${key}:${order}`;
  const selectedSortName = SorterList.find(
    (a) => a.id === selectedSortId
  )?.name;

  const sorterList = SorterList.map(({ name, id }) => {
    return {
      item: <SorterAndFilterItem text={name} />,
      id,
    };
  });

  const dropdownCloseHandler = () => {
    setShowDropdown(false);
  };
  const sorterItemClickHandler = (id: string) => {
    const parsedId = id.split(":");
    const key = parsedId[0] as Sorters;
    const order = parsedId[1] as SortingOrder;
    sortList({ key, order });
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
          <span>{selectedSortName}</span>
          <ICONS.ArrowDown className="label__arrow" />
        </span>
      </label>
      <Dropdown
        show={showDropdown}
        closeHandler={dropdownCloseHandler}
        clickHandler={sorterItemClickHandler}
        list={sorterList}
        selected={selectedSortId}
      />
    </div>
  );
};

export default Sorter;
