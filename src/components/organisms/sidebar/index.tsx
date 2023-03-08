import { Dispatch, SetStateAction } from 'react'
import SidebarList from '@/components/molecules/sidebarList'
import ButtonWithIcon from '@/components/molecules/buttonWithIcon'
import styles from './sidebar.module.scss'

import leftArrow from '../../../../public/images/left-arrow.svg';
import sidebarConfig from './sidebar.constants';

type SidebarProps = {
  activeTab: string,
  handleClick: Dispatch<SetStateAction<string>>,
}

export default function Sidebar({activeTab, handleClick}: SidebarProps) {
  return (
    <aside className={styles.pageSidebar}>
      <div className={styles.sidebarHeader}>
        <ButtonWithIcon btnClasses={styles.headerText} leftIcon={leftArrow} btnContent={'Back to all Projects'}></ButtonWithIcon>
      </div>
      <SidebarList sidebarItems={sidebarConfig} activeTab={activeTab} handleClick={handleClick}></SidebarList>
    </aside>
  )
}