import { shallow } from 'enzyme';
import TestnetListing from './testnet-listing';
import TestnetCard from '../testnet-card/testnet-card';
import { TESTNETS } from '../../utils/dummy-data';

describe('TestnetListing', () => {
    it('renders a list of testnets', () => {
        const testnets = TESTNETS;
        const wrapper = shallow(<TestnetListing testnets={testnets} />);
        const testnetCards = wrapper.find(TestnetCard);
        expect(testnetCards.length).toBe(3);
    });

    it('renders no testnets when empty array is passed', () => {
        const testnets = [];
        const wrapper = shallow(<TestnetListing testnets={testnets} />);
        const testnetCards = wrapper.find(TestnetCard);
        expect(testnetCards.length).toBe(0);
    });
});
