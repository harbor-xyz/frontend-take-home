import ArrowLeftLong from '@/components/icons/arrowLeftLong';
import SidebarMenuList from '@/components/molecules/sidebarMenuList';

import {SIDEBAR_CONFIG} from './dashboardSidebar.constants';

import styles from './dashboardSidebar.module.scss';

export default function DashboardSidebar() {
  return (
    <div className={styles.dashboardSidebar}>
      <div className={styles.backSection}>
        <ArrowLeftLong className={styles.backArrowIcon}/>
        Back to all projects
      </div>
      <SidebarMenuList config={SIDEBAR_CONFIG} />
    </div>
  )
}
