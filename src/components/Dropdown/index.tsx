import React, { FC, ReactElement } from "react";
import "./styles.scss";

interface DropdownProps {
  list?: {
    item: ReactElement;
    id: string;
  }[];
  selected?: string;
  show: boolean;
  closeHandler?: () => void;
  clickHandler: (id: string) => void;
}

const Dropdown: FC<DropdownProps> = ({
  list,
  show,
  selected,
  closeHandler,
  clickHandler,
}) => {
  return (
    <>
      <div className={`dropdown--wrapper ${show ? "open" : ""}`}>
        {list?.map(({ id, item }) => {
          return (
            <div
              className={`dropdown__item ${selected === id ? "selected" : ""}`}
              key={id}
              onClick={() => clickHandler(id)}
            >
              {item}
            </div>
          );
        })}
      </div>
      {show ? (
        <div className="dropdown--backdrop" onClick={closeHandler} />
      ) : null}
    </>
  );
};

export default Dropdown;
