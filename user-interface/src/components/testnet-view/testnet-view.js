import { useEffect, useState } from "react";
import TestnetHeader from "../testnet-header/testnet-header"
import TestnetListing from "../testnet-listing/testnet-listing"
import { map, uniq, filter, orderBy } from 'lodash';
import { Icons } from "../../utils/icons";
import { STATUS_ICON_MAP } from '../../utils/mapping';
import moment from 'moment';

export default function TestnetView({ testnets }) {
    const [currentFilter, setCurrentFilter] = useState('All');
    const [currentSorter, setCurrentSorter] = useState('status');
    const [uniqStatusValues, setUniqStatusValues] = useState([]);
    const [options, setOptions] = useState([]);
    const [filteredSortedTestnets, setFilteredSortedTestnets] = useState(testnets);

    useEffect(() => {
        setUniqStatusValues(getUniqueStatusValues());
    }, [testnets]);

    useEffect(() => {
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
        filterAndSortTestnets(testnets);
    }, [testnets, currentFilter, currentSorter, uniqStatusValues]);

    const handleFilterChange = (newFilter) => {
        setCurrentFilter(newFilter);
        filterAndSortTestnets();
    }

    const handleSorterChange = (newSorter) => {
        setCurrentSorter(newSorter);
        filterAndSortTestnets();
    }

    const getSortedTestnets = (filteredTestnets) => {
        let sortedTestnets = filteredTestnets;

        if (currentSorter === 'ascending') {
            sortedTestnets = orderBy(filteredTestnets, ['name'], ['asc'])
        } else if (currentSorter === 'descending') {
            sortedTestnets = orderBy(filteredTestnets, ['name'], ['desc'])
        } else if (currentSorter === 'status') {
            console.log('inside status filter');
            sortedTestnets = orderBy(filteredTestnets, ['status'], ['asc'])
        } else if (currentSorter === 'date_created') {
            sortedTestnets = orderBy(filteredTestnets, (testnet) => { return new moment(testnet.created_at); }, ['asc']);
        } else if (currentSorter === 'last_modified') {
            sortedTestnets = orderBy(filteredTestnets, (testnet) => { return new moment(testnet.updated_at); }, ['desc']);
        }

        return sortedTestnets
    }

    const filterAndSortTestnets = () => {
        const filteredTestnets = (!currentFilter || currentFilter === 'All') ? testnets : testnets.filter((testnet) => testnet.status === currentFilter)
        const sortedTestnets = getSortedTestnets(filteredTestnets)
        console.log('sorted testnets', map(sortedTestnets, (testnet) => testnet.status))
        setFilteredSortedTestnets(sortedTestnets);
    }

    const getUniqueStatusValues = () => {
        return uniq(map(testnets, (testnet) => testnet.status));
    }

    return <div>
        <TestnetHeader uniqStatusValues={options} onFilterChange={handleFilterChange} onSorterChange={handleSorterChange} filteredCount={filteredSortedTestnets.length} />
        <TestnetListing testnets={filteredSortedTestnets} />
    </div>
}
