import { shallow } from 'enzyme';
import DropDown from './DropDown';

describe('DropDown', () => {
    const options = [
        { value: 'option_1', label: 'Option 1' },
        { value: 'option_2', label: 'Option 2' },
        { value: 'option_3', label: 'Option 3' },
    ];

    const initialSelectedIndex = 0;
    const renderDropdown = (props) => shallow(
        <DropDown options={options} initialSelectedIndex={initialSelectedIndex} prefix="prefix" onChange={() => { }} {...props} />
    );

    it('renders without crashing', () => {
        const wrapper = renderDropdown({});
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the initial selected value', () => {
        const wrapper = renderDropdown({});
        expect(wrapper.find('.dropdown__selected_option_label').text()).toEqual(
            options[initialSelectedIndex].label
        );
    });

    it('updates selected value when an option is clicked', () => {
        const wrapper = renderDropdown({});
        wrapper.find('.dropdown__input').simulate('click');
        const thirdOption = wrapper.find('.dropdown__item').at(2);
        thirdOption.simulate('click');
        expect(wrapper.find('.dropdown__selected_option_label').text()).toEqual(
            options[2].label
        );
    });

    it('calls onChange with the selected value when an option is clicked', () => {
        const onChangeMock = jest.fn();
        const wrapper = renderDropdown({ onChange: onChangeMock });
        wrapper.find('.dropdown__input').simulate('click');
        const secondOption = wrapper.find('.dropdown__item').at(1);
        secondOption.simulate('click');
        expect(onChangeMock).toHaveBeenCalledWith(options[1].value);
    });

    it('displays the prefix if it is passed', () => {
        const prefix = 'My Prefix';
        const wrapper = renderDropdown({ prefix });
        expect(wrapper.find('.dropdown__selected_option_prefix').text()).toEqual(`${prefix}: `);
    });

    it('renders the correct number of options when the dropdown is open', () => {
        const wrapper = renderDropdown({});
        wrapper.find('.dropdown__input').simulate('click');
        expect(wrapper.find('.dropdown__item')).toHaveLength(options.length);
    });

    it('closes the dropdown when clicking outside of the component', () => {
        const wrapper = renderDropdown({});
        wrapper.find('.dropdown__input').simulate('click');
        expect(wrapper.find('.dropdown__menu')).toHaveLength(1);
        wrapper.find('.dropdown__input').simulate('click');
        expect(wrapper.find('.dropdown__menu')).toHaveLength(0);
    });
});
