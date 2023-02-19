import React, { useState, useRef, useEffect } from "react";
import { Icons } from '../../utils/icons';

import "./dropdown.scss";

/** Serves as a custom dropdown component where user can select a single option from various options available */
export default function DropDown({
    options,
    prefix,
    onChange,
    initialSelectedIndex
}) {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const inputRef = useRef();

    // To make sure that the first dropdown closes when user clicks on the second one or anywhere else while first one is open
    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setOpenDropdown(false);
            }
        };
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e) => {
        setOpenDropdown(!openDropdown);
    };

    const getPrefixedDisplay = (label) => {
        return <div className="dropdown__selected_option">
            <span className="dropdown__selected_option_prefix">{prefix}: </span>
            <span className="dropdown__selected_option_label">{label}</span>
        </div>
    }

    const getDisplay = () => {
        if (!selectedValue) {
            setSelectedValue(options[initialSelectedIndex]);
            return getPrefixedDisplay(options[initialSelectedIndex].label)
        }
        return getPrefixedDisplay(selectedValue.label)
    };


    const onItemClick = (option) => {
        setSelectedValue(option);
        onChange(option.value);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue.value === option.value;
    };

    return (
        <div className="dropdown">
            <div ref={inputRef} onClick={handleInputClick} className="dropdown__input">
                <div className="dropdown__selected_value">{getDisplay()}</div>
                <img className="dropdown__trigger_icon" src={Icons.DownArrow} alt="open dropdown" />
            </div>
            {openDropdown && (
                <div className="dropdown__menu">
                    {options.map((option, index) => (
                        <div
                            onClick={() => onItemClick(option)}
                            key={option.value}
                            className={`dropdown__item ${(isSelected(option)) && "dropdown__item--selected"}`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


