import React, { useEffect, useState, useCallback, useLayoutEffect } from "react";
import TestnetHeader from "../testnet-header/testnet-header"
import TestnetListing from "../testnet-listing/testnet-listing"
import { map, uniq, filter, orderBy } from 'lodash';
import { Icons } from "../../utils/icons";
import { STATUS_ICON_MAP } from '../../utils/mapping';
import { SORT_BY } from '../../utils/mapping';
import moment from 'moment';


/**
A component that displays a filtered and sorted list of testnets using the TestnetHeader and TestnetListing components.
@component
@param {Object} props - The props for the component.
@param {Array<Object>} props.testnets - An array of testnet objects to be displayed.
@returns {JSX.Element} A filtered and sorted list of testnets.
*/
export function TestnetView({ testnets }) {
    const [currentFilter, setCurrentFilter] = useState('All');
    const [currentSorter, setCurrentSorter] = useState(SORT_BY.STATUS);
    const [options, setOptions] = useState([]);
    const [filteredSortedTestnets, setFilteredSortedTestnets] = useState(testnets);

    useEffect(() => {
        const uniqStatusValues = getUniqueStatusValues();
        let statusOptions = [{
            value: 'All', label: <div className="filter__option">
                <img src={Icons.All} alt="Hourglass" />
                <span>All {`(${testnets.length})`}</span>
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

    useLayoutEffect(() => {
        setFilteredSortedTestnets(getFilterAndSortTestnets(testnets));
    }, [currentFilter, currentSorter]);

    const handleFilterChange = useCallback((newFilter) => {
        setCurrentFilter(newFilter);
    }, []);

    const handleSorterChange = useCallback((newSorter) => {
        setCurrentSorter(newSorter);
    }, [])

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

    const getFilterAndSortTestnets = () => {
        const filteredTestnets = (!currentFilter || currentFilter === 'All') ? testnets : testnets.filter((testnet) => testnet.status === currentFilter)
        return getSortedTestnets(filteredTestnets)

    }

    const getUniqueStatusValues = useCallback(() => {
        return uniq(map(testnets, (testnet) => testnet.status));
    }, [testnets])

    return <div>
        <TestnetHeader uniqStatusValues={options} onFilterChange={handleFilterChange} onSorterChange={handleSorterChange} filteredCount={filteredSortedTestnets.length} />
        <TestnetListing testnets={filteredSortedTestnets} />
    </div>
}

export default React.memo(TestnetView)
