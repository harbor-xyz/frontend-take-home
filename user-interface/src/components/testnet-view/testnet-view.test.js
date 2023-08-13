import React from 'react';
import { shallow } from 'enzyme';
import { TestnetView } from './testnet-view';
import sinon from 'sinon';
import { getMemoisedComponent } from '../../utils/test-utils';


describe('TestnetView', () => {
    const testnets = [
        { name: 'testnet1', status: 'RUNNING', created_at: '2022-02-01', updated_at: '2022-02-10' },
        { name: 'testnet2', status: 'UPDATING', created_at: '2022-02-03', updated_at: '2022-02-12' },
        { name: 'testnet3', status: 'RUNNING', created_at: '2022-02-02', updated_at: '2022-02-09' },
        { name: 'testnet4', status: 'RUNNING', created_at: '2022-02-04', updated_at: '2022-02-11' },
    ]; ''

    const MemoisedTestnetHeader = getMemoisedComponent('TestnetHeader')

    it('renders the TestnetHeader and TestnetListing components', () => {
        const wrapper = shallow(<TestnetView testnets={testnets} />);
        expect(wrapper.find(MemoisedTestnetHeader)).toHaveLength(1);
        expect(wrapper.find(getMemoisedComponent('TestnetListing'))).toHaveLength(1);
    });

    // These filter and sort ops should be tested by mount instead of shallow method
    // enzyme react adapter 16 (the one that we are currently using ) is not compatible 
    // with the react version we are using so skipping these tests.
    xit('updates the filtered and sorted testnets when the filter or sorter changes', () => {
        const wrapper = shallow(<TestnetView testnets={testnets} />);
        wrapper.find(MemoisedTestnetHeader).props().onFilterChange('RUNNING');
        wrapper.find(MemoisedTestnetHeader).props().onSorterChange('Name (A-Z)');
        expect(wrapper.find(getMemoisedComponent('TestnetListing')).props().testnets).toEqual([
            { name: 'testnet1', status: 'RUNNING', created_at: '2022-02-01', updated_at: '2022-02-10' },
            { name: 'testnet3', status: 'RUNNING', created_at: '2022-02-02', updated_at: '2022-02-09' },
            { name: 'testnet4', status: 'RUNNING', created_at: '2022-02-04', updated_at: '2022-02-11' },
        ]);
    });

    xit('displays the correct number of filtered and sorted testnets', () => {
        const wrapper = shallow(<TestnetView testnets={testnets} />);
        expect(wrapper.find(MemoisedTestnetHeader).props().filteredCount).toBe(4);
        wrapper.find(MemoisedTestnetHeader).props().onFilterChange('RUNNING');
        wrapper.find(MemoisedTestnetHeader).props().onSorterChange('Name (A-Z)');
        expect(wrapper.find(MemoisedTestnetHeader).props().filteredCount).toBe(3);
    });
});
