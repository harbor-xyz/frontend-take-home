import DropDown from '../dropdown/dropdown';

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

export default function TestnetHeader({ uniqStatusValues, onFilterChange, filteredCount, onSorterChange }) {
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
