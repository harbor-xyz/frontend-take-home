import React, { useState, useRef, useEffect, useCallback } from "react";
import { Icons } from '../../utils/icons';
import PropTypes from 'prop-types';

import "./dropdown.scss";

/**
@typedef {Object} Option
@property {string} label - The label for the option
@property {JSX.Element} value - The value for the option
*/

/**
Serves as a custom dropdown component where user can select a single option from various options available
@param {Object} props - The props object for the DropDown component
@param {Array<Option>} props.options - The array of options to display in the dropdown
@param {string} props.prefix - The prefix to display with the selected option
@param {function} props.onChange - The function to be called when an option is selected
@param {number} props.initialSelectedIndex - The index of the initially selected option
@returns {JSX.Element} - The JSX for the DropDown component
*/
export function DropDown({
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

    const handleInputClick = useCallback((e) => {
        setOpenDropdown(!openDropdown);
    }, []);

    const getPrefixedDisplay = useCallback((label) => {
        return <div className="dropdown__selected_option">
            <span className="dropdown__selected_option_prefix">{prefix}: </span>
            <span className="dropdown__selected_option_label">{label}</span>
        </div>
    }, [])

    const getDisplay = useCallback(() => {
        if (!selectedValue) {
            return getPrefixedDisplay(options[initialSelectedIndex].label)
        }
        return getPrefixedDisplay(selectedValue.label)
    }, [selectedValue]);


    const onItemClick = useCallback((option) => {
        setSelectedValue(option);
        onChange(option.value);
    }, []);

    const isSelected = useCallback((option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue.value === option.value;
    }, [selectedValue]);

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

DropDown.propTypes = {
    /** An array of objects representing the options available in the dropdown */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.string.isRequired]),
        })
    ).isRequired,
    /** The prefix to display before the selected option in the dropdown */
    prefix: PropTypes.string.isRequired,
    /** A callback function to be executed when the selected value is changed */
    onChange: PropTypes.func.isRequired,
    /** The index of the option that should be initially selected */
    initialSelectedIndex: PropTypes.number
};

export default React.memo(DropDown);
