
import './sidebar-item.scss';

export default function SidebarItem(props) {
    const { itemName, icon, count, userActionIcon, isSelected } = props;
    return <div className={`sidebar_item ${isSelected ? "sidebar_item--selected" : ""}`}>
        <img className="sidebar_item__icon" src={icon} alt={itemName} />
        <span className="sidebar_item__name">{itemName}</span>
        {count && <span className="sidebar_item__count">{count}</span>}
        <img className="sidebar_item__takeAction" src={userActionIcon} />
    </div>
}
