import React from 'react';
import DropDown from '../dropdown/dropdown';
import PropTypes from 'prop-types';

import './testnet-header.scss';

const sortOptions = [{
    value: 'ascending', label: <div className="filter__option">
        <span>Name A-Z</span>
    </div>
},
{
    value: 'descending', label: <div className="filter__option">
        <span>Name Z-A</span>
    </div>
},
{
    value: 'status', label: <div className="filter__option">
        <span>Status</span>
    </div>
},
{
    value: 'date_created', label: <div className="filter__option">
        <span>Date created</span>
    </div>
},
{
    value: 'last_modified', label: <div className="filter__option">
        <span>Last modified</span>
    </div>
}];

/**
 * A card component for displaying information about a testnet.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {Object} props.testnet - The testnet data to be displayed in the card.
 * @returns {JSX.Element} A card component with information about a testnet.
 */
function TestnetHeader({ uniqStatusValues, onFilterChange, filteredCount, onSorterChange }) {
    return <div className="testnet_header">
        <header className="testnet_header__name">Testnets {`(${filteredCount})`}
            <span className="testnet_header__add_new">+ New Testnet</span>
        </header>
        <div className="testnet_header__filter_sort_container">
            {uniqStatusValues && uniqStatusValues.length !== 0 && <DropDown
                options={uniqStatusValues}
                onChange={(value) => onFilterChange(value)} prefix="Filter by" initialSelectedIndex={0} />}
            <DropDown
                options={sortOptions}
                onChange={(value) => onSorterChange(value)} prefix="Sort by" initialSelectedIndex={2} />
        </div>
    </div>
}

TestnetHeader.propTypes = {
    uniqStatusValues: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.element.isRequired,
    })),
    onFilterChange: PropTypes.func.isRequired,
    filteredCount: PropTypes.number.isRequired,
    onSorterChange: PropTypes.func.isRequired,
};

export default React.memo(TestnetHeader);
