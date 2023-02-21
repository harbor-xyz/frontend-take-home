import { shallow } from 'enzyme';
import MainView from './main-view';
import { TESTNETS } from '../../utils/dummy-data';

describe('MainView', () => {
    const testnets = TESTNETS;

    it('should render a TestnetView component with testnets prop', () => {
        const wrapper = shallow(<MainView testnets={testnets} />);
        const testnetView = wrapper.find('Route[exact=true]').prop('element');
        expect(testnetView.props.testnets).toEqual(testnets);
    });
});
