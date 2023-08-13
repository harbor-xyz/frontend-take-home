import { shallow } from 'enzyme';
import TestnetHeader from './testnet-header';

describe('TestnetHeader', () => {
    const props = {
        uniqStatusValues: [],
        onFilterChange: jest.fn(),
        filteredCount: 0,
        onSorterChange: jest.fn(),
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<TestnetHeader {...props} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the correct header text', () => {
        const wrapper = shallow(<TestnetHeader {...props} />);
        expect(wrapper.find('.testnet_header__name').text()).toEqual('Testnets (0)+ New Testnet');
    });
});
