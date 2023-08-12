import React, { FC, useState } from 'react';
import classnames from 'classnames';

export type Option = {
    label: string;
    value: string;
    selected?: boolean;
    OptionIcon?: React.FC<any>;
    color?: string;
}
interface DropdownProps {
    title?: string;
    options: Option[];
    className?: string;
    onChange?: (option: Option) => void;
}

const Dropdown: FC<DropdownProps> = ({ title, options, className, onChange }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        onChange?.(option);
    };

    return (
        <div className={classnames('dropdown', { [`${className}`]: className })} >
            {title && <button className="btn btn-link text-decoration-none text-secondary px-0 mx-0">{title}</button>}
            <button className={classnames('btn dropdown-toggle btn-link text-decoration-none', { [`text-${selectedOption?.color}`]: true, 'text-dark': !selectedOption?.color })} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedOption?.OptionIcon && <selectedOption.OptionIcon color={selectedOption.color} />} <span className='ms-2'>{selectedOption?.label || 'Select Option'}</span>
            </button>
            <ul className="dropdown-menu p-2">
                {options?.map((option) => {
                    const { value, OptionIcon, label, color } = option;
                    return (
                        <li key={value} className={classnames('dropdown-item text-center rounded', { [`text-${color}`]: color, 'bg-light': value === selectedOption?.value })} onClick={() => handleOptionClick(option)}>
                            {OptionIcon && <OptionIcon color={color} />} <span className="ms-2">{label}</span>
                        </li>
                    )
                })}
            </ul>
        </div >
    );
};

export default Dropdown;
