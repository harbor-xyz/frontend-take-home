import React from "react";
import { shallow } from "enzyme";
import SidebarItem from "./sidebar-item";


describe("SidebarItem", () => {

    it("should render without throwing an error", () => {
        const wrapper = shallow(
            <SidebarItem itemName="Test Item" icon="test-icon.png" userActionIcon="test-user-icon.png" />
        );
        expect(wrapper.exists()).toBe(true);
    });

    it("should render the item name and icon", () => {
        const wrapper = shallow(
            <SidebarItem itemName="Test Item" icon="test-icon.png" userActionIcon="test-user-icon.png" />
        );
        expect(wrapper.find(".sidebar_item__name").text()).toEqual("Test Item");
        expect(wrapper.find(".sidebar_item__icon").prop("src")).toEqual(
            "test-icon.png"
        );
    });

    it("should render the count if provided", () => {
        const wrapper = shallow(
            <SidebarItem itemName="Test Item" icon="test-icon.png" count={5} userActionIcon="test-user-icon.png" />
        );
        expect(wrapper.find(".sidebar_item__count").text()).toEqual("5");
    });

    it("should render the user action icon if provided", () => {
        const wrapper = shallow(
            <SidebarItem
                itemName="Test Item"
                icon="test-icon.png"
                userActionIcon="test-user-icon.png"
            />
        );
        expect(wrapper.find(".sidebar_item__takeAction").prop("src")).toEqual(
            "test-user-icon.png"
        );
    });

    it('should add the "sidebar_item--selected" class if isSelected is true', () => {
        const wrapper = shallow(
            <SidebarItem
                itemName="Test Item"
                icon="test-icon.png"
                isSelected={true}
                userActionIcon="test-user-icon.png"
            />
        );
        expect(wrapper.find(".sidebar_item--selected").exists()).toBe(true);
    });

    it('should not add the "sidebar_item--selected" class if isSelected is false', () => {
        const wrapper = shallow(
            <SidebarItem
                itemName="Test Item"
                icon="test-icon.png"
                isSelected={false}
                userActionIcon="test-user-icon.png"
            />
        );
        expect(wrapper.find(".sidebar_item--selected").exists()).toBe(false);
    });
});
