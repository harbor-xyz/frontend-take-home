import React from 'react';
import { shallow } from 'enzyme';
import TestnetView from './testnet-view';
import sinon from 'sinon';

describe('TestnetView', () => {
    const testnets = [
        { name: 'testnet1', status: 'RUNNING', created_at: '2022-02-01', updated_at: '2022-02-10' },
        { name: 'testnet2', status: 'UPDATING', created_at: '2022-02-03', updated_at: '2022-02-12' },
        { name: 'testnet3', status: 'RUNNING', created_at: '2022-02-02', updated_at: '2022-02-09' },
        { name: 'testnet4', status: 'RUNNING', created_at: '2022-02-04', updated_at: '2022-02-11' },
    ];

    beforeAll(() => {
        // We are passing testnet array with bare minimum details which is tripping the proptypes check 
        // (due to few required properties not being available)
        // and leading to console errors. We are suppressing these errors.
        const stub = sinon.stub(console, 'error');
    });

    it('renders the TestnetHeader and TestnetListing components', () => {
        const wrapper = shallow(<TestnetView testnets={testnets} />);
        expect(wrapper.find('TestnetHeader')).toHaveLength(1);
        expect(wrapper.find('TestnetListing')).toHaveLength(1);
    });

    it('updates the filtered and sorted testnets when the filter or sorter changes', () => {
        const wrapper = shallow(<TestnetView testnets={testnets} />);
        wrapper.find('TestnetHeader').props().onFilterChange('RUNNING');
        wrapper.find('TestnetHeader').props().onSorterChange('Name (A-Z)');
        expect(wrapper.find('TestnetListing').props().testnets).toEqual([
            { name: 'testnet1', status: 'RUNNING', created_at: '2022-02-01', updated_at: '2022-02-10' },
            { name: 'testnet3', status: 'RUNNING', created_at: '2022-02-02', updated_at: '2022-02-09' },
            { name: 'testnet4', status: 'RUNNING', created_at: '2022-02-04', updated_at: '2022-02-11' },
        ]);
    });

    it('displays the correct number of filtered and sorted testnets', () => {
        const wrapper = shallow(<TestnetView testnets={testnets} />);
        expect(wrapper.find('TestnetHeader').props().filteredCount).toBe(4);
        wrapper.find('TestnetHeader').props().onFilterChange('RUNNING');
        wrapper.find('TestnetHeader').props().onSorterChange('Name (A-Z)');
        expect(wrapper.find('TestnetHeader').props().filteredCount).toBe(3);
    });

    afterAll(() => {
        console.error.restore();
    });
});
