import SidebarList from '@/components/molecules/sidebarList'
import ButtonWithIcon from '@/components/molecules/buttonWithIcon'
import styles from './sidebar.module.scss'

import leftArrow from '../../../../public/images/left-arrow.svg';

export default function Sidebar() {
  
  return (
    <aside className={styles.pageSidebar}>
      <div className={styles.sidebarHeader}>
        <ButtonWithIcon btnClasses={styles.headerText} leftIcon={leftArrow} btnContent={'Back to all Projects'}></ButtonWithIcon>
      </div>
      <SidebarList></SidebarList>
    </aside>
  )
}