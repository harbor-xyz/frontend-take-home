import PropTypes from 'prop-types';

import './sidebar-item.scss';

/**
 * SidebarItem component for displaying a single item in the sidebar.
 * @param {Object} props - Component props.
 * @param {string} props.itemName - Name of the sidebar item.
 * @param {string} props.icon - URL of the icon for the sidebar item.
 * @param {number} [props.count] - Optional count to display next to the item name.
 * @param {string} props.userActionIcon - URL of the icon for user action associated with the sidebar item.
 * @param {boolean} props.isSelected - Whether the sidebar item is currently selected.
 */
export default function SidebarItem(props) {
    const { itemName, icon, count, userActionIcon, isSelected } = props;
    return <div className={`sidebar_item ${isSelected ? "sidebar_item--selected" : ""}`}>
        <img className="sidebar_item__icon" src={icon} alt={itemName} />
        <span className="sidebar_item__name">{itemName}</span>
        {count && <span className="sidebar_item__count">{count}</span>}
        <img className="sidebar_item__takeAction" src={userActionIcon} />
    </div>
}

SidebarItem.propTypes = {
    itemName: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    count: PropTypes.number,
    userActionIcon: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
};
