import React, { useEffect, useState, useCallback, useLayoutEffect } from "react";
import TestnetHeader from "../testnet-header/testnet-header"
import TestnetListing from "../testnet-listing/testnet-listing"
import { map, uniq, filter, orderBy } from 'lodash';
import { Icons } from "../../utils/icons";
import { STATUS_ICON_MAP } from '../../utils/mapping';
import { SORT_BY } from '../../utils/mapping';
import moment from 'moment';

// represents the option to show all testnets in the list.
const FILTER_ALL = 'All';

/**
A component that displays a filtered and sorted list of testnets using the TestnetHeader and TestnetListing components.
@component
@param {Object} props - The props for the component.
@param {Array<Object>} props.testnets - An array of testnet objects to be displayed.
@returns {JSX.Element} A filtered and sorted list of testnets.
*/
export function TestnetView({ testnets }) {
    const [currentFilter, setCurrentFilter] = useState(FILTER_ALL);
    const [currentSorter, setCurrentSorter] = useState(SORT_BY.STATUS);
    const [options, setOptions] = useState([]);
    const [filteredSortedTestnets, setFilteredSortedTestnets] = useState(testnets);

    // populate the options state with an array of objects representing the filter options 
    // for the dropdown menu. The hook is executed only once when the component mounts, 
    // because the dependency array is empty
    useEffect(() => {
        const uniqStatusValues = getUniqueStatusValues();
        let statusOptions = [{
            value: FILTER_ALL, label: <div className="filter__option">
                <img src={Icons.All} alt="Hourglass" />
                <span>{FILTER_ALL}</span>
            </div>
        }]
        statusOptions = statusOptions.concat(uniqStatusValues.map((statusValue) => {
            return {
                value: statusValue, label: <div className="filter__option">
                    <img src={STATUS_ICON_MAP[statusValue]} alt="Hourglass" />
                    <span>{statusValue} {`(${filter(testnets, (testnet) => testnet.status === statusValue).length})`}</span>
                </div>
            }
        }))

        setOptions(statusOptions);
    }, []);

    // update the filteredSortedTestnets state with the result of filtering and sorting 
    // the testnets, based on the current filter and sorter options. 
    // The hook is executed whenever currentFilter or currentSorter change.
    useLayoutEffect(() => {
        setFilteredSortedTestnets(getFilterAndSortTestnets(testnets));
    }, [currentFilter, currentSorter]);

    // update the corresponding state when the user selects a new filter or sorter option from the dropdown menus.
    const handleFilterChange = useCallback((newFilter) => {
        setCurrentFilter(newFilter);
    }, []);

    const handleSorterChange = useCallback((newSorter) => {
        setCurrentSorter(newSorter);
    }, [])

    // takes an array of filtered testnets and returns a new array of testnets sorted 
    // based on the current sorter option. The function uses the orderBy function from the 
    // lodash library to sort the array by different properties, such as name, status, created_at, and updated_at.
    const getSortedTestnets = useCallback((filteredTestnets) => {
        let sortedTestnets = filteredTestnets;

        if (currentSorter === SORT_BY.ASC) {
            sortedTestnets = orderBy(filteredTestnets, ['name'], ['asc'])
        } else if (currentSorter === SORT_BY.DESC) {
            sortedTestnets = orderBy(filteredTestnets, ['name'], ['desc'])
        } else if (currentSorter === SORT_BY.STATUS) {
            sortedTestnets = orderBy(filteredTestnets, ['status'], ['asc'])
        } else if (currentSorter === SORT_BY.DATE_CREATED) {
            sortedTestnets = orderBy(filteredTestnets, (testnet) => { return new moment(testnet.created_at); }, ['asc']);
        } else if (currentSorter === SORT_BY.LAST_MODIFIED) {
            sortedTestnets = orderBy(filteredTestnets, (testnet) => { return new moment(testnet.updated_at); }, ['desc']);
        }

        return sortedTestnets
    }, [currentFilter, currentSorter])

    // filters the testnets based on the current filter option and then passes the filtered
    // testnets to the getSortedTestnets function to sort them based on the current sorter option.
    // The function returns the sorted and filtered testnets.
    const getFilterAndSortTestnets = () => {
        const filteredTestnets = (!currentFilter || currentFilter === FILTER_ALL) ? testnets : testnets.filter((testnet) => testnet.status === currentFilter)
        return getSortedTestnets(filteredTestnets)

    }

    // uses the map and uniq functions from the lodash library to extract a unique list
    // of status values from the testnets array. The function is used to populate
    // the options state in the useEffect hook.
    const getUniqueStatusValues = useCallback(() => {
        return uniq(map(testnets, (testnet) => testnet.status));
    }, [testnets])

    return <div>
        <TestnetHeader uniqStatusValues={options} onFilterChange={handleFilterChange} onSorterChange={handleSorterChange} filteredCount={filteredSortedTestnets.length} />
        <TestnetListing testnets={filteredSortedTestnets} />
    </div>
}

export default React.memo(TestnetView)
