import { Icons } from '../../utils/icons';
import SidebarItem from '../sidebar-item/sidebar-item';

import './sidebar.scss'

/** Serves as a side bar for the app. It contains links to navigate to see details of the testnets, members and key for this project.   */
export default function SideBar({ testnetCount }) {
    return <section className="sidebar">
        <div className="sidebar__navigation">
            <img src={Icons.LeftArrow} alt="Go back to all projects" /> <a className="sidebar__navigation_link" href="#">Back to all projects</a>
        </div>
        <div className="sidebar__list">
            <div className="sidebar__project">
                <img className="sidebar__project_icon" src={Icons.Star} alt="Project Icon" /> <h2 className="sidebar__header">Alchemy University</h2>
            </div>
            <SidebarItem itemName={"Testnets"} count={testnetCount} icon={Icons.Testnet} userActionIcon={Icons.Plus} isSelected />
            <SidebarItem itemName={"Members"} count={"1"} icon={Icons.Members} userActionIcon={Icons.Plus} />
            <SidebarItem itemName={"Project Key"} icon={Icons.ProjectKey} userActionIcon={Icons.Copy} />
        </div>
    </section>
}


