import React, { useEffect, useState, useCallback } from 'react';
import Card from '../components/Card';
import Dropdown, { Option } from '../components/Dropdown';
import { AddIcon, DotIcon } from '../components/Icon';
import TestnetCard, { TTestnet } from '../components/TestnetCard';
import { statusOptions } from '../components/TestnetStatus';
import { useTestnets } from '../hooks/useTestnets';

const sortOptions: Option[] = [
    { label: 'Name A-Z', value: 'name-ASC' },
    { label: 'Name Z-A', value: 'name-DESC' },
    { label: 'Status', value: 'status' },
    { label: 'Date created', value: 'created_at' },
    { label: 'Last modified', value: 'updated_at' },
]

const Testnets: React.FC = () => {
    const allTestnet: TTestnet[] = useTestnets('http://localhost:8000/testnets');
    const [testnet, setTestnet] = useState<TTestnet[]>([]);
    const [statusWithCount, setStatusWithCount] = useState<Option[]>([]);
    const [sortBy, setSortBy] = useState<Option>();

    useEffect(() => {
        setTestnet(allTestnet);
        const statusCount = new Map();
        for (const { status } of allTestnet) {
            if (statusCount.has(status)) {
                statusCount.set(status, statusCount.get(status) + 1);
            } else statusCount.set(status, 1);
        }
        setStatusWithCount(statusOptions.map(option => {
            if (option.value === '') {
                return { ...option, label: `${option.label}` };
            } else {
                return { ...option, label: `${option.label} (${statusCount.get(option.value) || 0})` };
            }

        }));
    }, [allTestnet]);

    const sortTestnets = useCallback((sortByCriteria: Option | undefined, data: TTestnet[]) => {
        if (!sortByCriteria) return data;
        const [key, order = 'ASC'] = sortByCriteria.value.split('-');
        return data.sort((a, b) => {
            if (['name', 'status'].includes(key)) {
                const fa = a[key].toLowerCase();
                const fb = b[key].toLowerCase();
                if (fa < fb) return order === 'ASC' ? -1 : 1;
                if (fa > fb) return order === 'ASC' ? 1 : -1;
                return 0;
            } else if (['created_at', 'updated_at'].includes(key)) {
                return new Date(a[key]).getTime() - new Date(b[key]).getTime();
            }
            return 0;
        });
    }, []);

    const handleFilter = useCallback((selectedOption: Option) => {
        if (selectedOption.value === '') {
            setTestnet([...sortTestnets(sortBy, allTestnet)]);
        } else {
            setTestnet([...sortTestnets(sortBy, allTestnet.filter(t => t.status === selectedOption.value))]);
        }
    }, [allTestnet, sortBy]);

    const handleSort = useCallback((selectedOption: Option) => {
        setSortBy(selectedOption);
        setTestnet([...sortTestnets(selectedOption, testnet)]);
    }, [testnet, sortTestnets]);

    return (
        <div className='m-5'>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div className="h4 fw-bold pe-4">Testnets({allTestnet.length})</div>
                    <a className="text-primary text-decoration-none">
                        <AddIcon color='primary' /> New Testnet</a>
                </div>
                <div className="d-flex align-items-center">
                    <Dropdown title='Filter by:' options={statusWithCount} onChange={handleFilter} />
                    <DotIcon width="0.4em" className="ms-1 me-2" />
                    <Dropdown title='Sort by:' options={sortOptions} onChange={handleSort} />
                </div>
            </div>
            {testnet.length > 0 && testnet.map(t => <TestnetCard data={t} key={t.id} />)}
            {testnet.length === 0 && <Card className="p-2 my-4 shadow border-0 rounded-4" title="No Testnet found." />}
        </div>
    );
}

export default Testnets;
