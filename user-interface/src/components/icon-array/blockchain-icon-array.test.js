import { shallow } from 'enzyme';
import sinon from 'sinon';
import BlockchainIconArray from './blockchain-icon-array';

describe('BlockchainIconArray component', () => {
    const props = {
        icons: ['icon1.png', 'icon2.png', 'icon3.png'],
    };

    it('renders without crashing', () => {
        shallow(<BlockchainIconArray {...props} />);
    });

    it('renders the correct number of icons', () => {
        const wrapper = shallow(<BlockchainIconArray {...props} />);
        expect(wrapper.find('.icon_array__item')).toHaveLength(props.icons.length);
    });

    it('renders the icons in the correct order', () => {
        const wrapper = shallow(<BlockchainIconArray {...props} />);
        wrapper.find('.icon_array__item').forEach((node, index) => {
            expect(node.prop('src')).toEqual(props.icons[index]);
        });
    });

    it('renders the correct class name', () => {
        const wrapper = shallow(<BlockchainIconArray {...props} />);
        expect(wrapper.find('.icon_array')).toHaveLength(1);
    });

    it('throws an error if the icons prop is not an array', () => {
        const propsWithInvalidIcons = { icons: 'invalid' };

        // Stubbing console log is necessary as the thrown error doesn't let jest consider this as a passing test
        // We are restoring console.error immediately after to catch any legit errors
        const stub = sinon.stub(console, 'error');
        expect(() => shallow(<BlockchainIconArray {...propsWithInvalidIcons} />)).toThrow();
        console.error.restore();
    });
});
