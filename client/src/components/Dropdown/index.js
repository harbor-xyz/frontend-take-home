import { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { Button } from "../../components";
import { FaChevronDown } from "react-icons/fa";

function Dropdown({ options, selectedValue, onChange }) {
  const [isOpen, setOpen] = useState(false);
  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );
  const ref = useRef(null);

  useEffect(() => {
    const closeDropdown = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isOpen]);

  const toggleDropdown = () => setOpen(!isOpen);
  return (
    <>
      <div className="max-w-lg mx-auto relative" ref={ref}>
        <Button
          variant={Button.VARIANTS.GHOST}
          iconRight={<FaChevronDown />}
          onClick={toggleDropdown}
        >
          {selectedOption.label}
        </Button>

        <div
          className={classNames(
            { hidden: !isOpen },
            "absolute right-0 bg-white text-base z-50 list-none divide-y divide-gray-100 rounded-lg shadow border-gray-300"
          )}
        >
          <ul className="p-2" aria-labelledby="dropdown">
            {options.map((option) => (
              <li
                key={option.value}
                className={classNames(
                  "text-sm hover:bg-gray-100 text-gray-700 block px-8 py-1.5 cursor-pointer text-center",
                  { "bg-gray-100": selectedValue === option.value }
                )}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                <span className="whitespace-nowrap">{`${option.label}`}</span>
                {option.secondaryLabel ? (
                  <span>{`(${option.secondaryLabel})`}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export { Dropdown };
