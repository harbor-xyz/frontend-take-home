import { shallow } from 'enzyme';
import TestnetHeader from './TestnetHeader';

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

    it('should render a filter dropdown if uniqStatusValues is not empty', () => {
        const propsWithFilterValues = { ...props, uniqStatusValues: [{ value: 'status', label: <div>status</div> }] };
        const wrapper = shallow(<TestnetHeader {...propsWithFilterValues} />);
        expect(wrapper.find('DropDown[prefix="Filter by"]').exists()).toBe(true);
    });

    it('should not render a filter dropdown if uniqStatusValues is empty', () => {
        const wrapper = shallow(<TestnetHeader {...props} />);
        expect(wrapper.find('DropDown[prefix="Filter by"]').exists()).toBe(false);
    });

    it('should render a sort dropdown', () => {
        const wrapper = shallow(<TestnetHeader {...props} />);
        expect(wrapper.find('DropDown[prefix="Sort by"]').exists()).toBe(true);
    });

    it('should call onFilterChange when the filter dropdown is changed', () => {
        const propsWithFilterValues = { ...props, uniqStatusValues: [{ value: 'status', label: <div>status</div> }] };
        const wrapper = shallow(<TestnetHeader {...propsWithFilterValues} />);
        wrapper.find('DropDown[prefix="Filter by"]').simulate('change', 'all');
        expect(props.onFilterChange).toHaveBeenCalledWith('all');
    });

    it('should call onSorterChange when the sort dropdown is changed', () => {
        const wrapper = shallow(<TestnetHeader {...props} />);
        wrapper.find('DropDown[prefix="Sort by"]').simulate('change', 'status');
        expect(props.onSorterChange).toHaveBeenCalledWith('status');
    });
});
