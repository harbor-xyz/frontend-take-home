import { shallow } from 'enzyme';
import SideBar from './sidebar';
import SidebarItem from '../sidebar-item/sidebar-item';

describe('SideBar', () => {
    it('renders SidebarItem components with correct props', () => {
        const wrapper = shallow(<SideBar testnetCount={5} />);
        const sidebarItems = wrapper.find(SidebarItem);

        expect(sidebarItems).toHaveLength(3);

        expect(sidebarItems.at(0).props()).toMatchObject({
            itemName: 'Testnets',
            count: 5,
            icon: expect.any(String),
            userActionIcon: expect.any(String),
            isSelected: true,
        });

        expect(sidebarItems.at(1).props()).toMatchObject({
            itemName: 'Members',
            count: 1,
            icon: expect.any(String),
            userActionIcon: expect.any(String),
        });

        expect(sidebarItems.at(2).props()).toMatchObject({
            itemName: 'Project Key',
            icon: expect.any(String),
            userActionIcon: expect.any(String),
        });
    });
});
