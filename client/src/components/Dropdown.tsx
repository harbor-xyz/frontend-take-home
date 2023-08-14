import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames';
import { ArrowDownIcon } from '../components/Icon';

export type Option = {
    label: string;
    value: string;
    selected?: boolean;
    OptionIcon?: React.FC<any>;
    color?: string;
    disabled?: boolean;
}
interface DropdownProps {
    title?: string;
    placeholder?: string;
    options: Option[];
    className?: string;
    onChange?: (option: Option) => void;
}

const Dropdown: FC<DropdownProps> = ({ title, placeholder = "Select Option", options, className, onChange }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        onChange?.(option);
    };

    useEffect(() => {
        const selected = options.find(option => option.selected);
        if (selected) {
            setSelectedOption(selected);
        }
    }, [options]);

    return (
        <div className={classnames('dropdown', className)} >
            {title && <button className="btn btn-link text-decoration-none text-secondary px-0 mx-0">{title}</button>}
            <button className={classnames('btn btn-link text-decoration-none text-reset')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedOption?.OptionIcon && <selectedOption.OptionIcon color={selectedOption.color} />}
                {selectedOption && <span className={classnames('ms-2', { [`text-${selectedOption.color}`]: selectedOption.color })}>{selectedOption?.label}</span>}
                {!selectedOption && <span className="ms-2">{placeholder}</span>}

                <ArrowDownIcon color="secondary" className="ms-1" />
            </button>
            <ul className="dropdown-menu p-2 shadow border-0">
                {options?.map((option) => {
                    const { value, OptionIcon, label, color, disabled } = option;
                    return (
                        <li key={value} className={classnames('dropdown-item text-center rounded', { [`text-${color}`]: color, 'bg-light': value === selectedOption?.value, 'disabled': disabled })} onClick={() => handleOptionClick(option)}>
                            {OptionIcon && <OptionIcon color={color} />} <span className="ms-2">{label}</span>
                        </li>
                    )
                })}
            </ul>
        </div >
    );
};

export default Dropdown;
