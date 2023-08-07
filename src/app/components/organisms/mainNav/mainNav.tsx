import type {MainMenuItemProps} from '@/types';

import HarborLogo from '@/components/icons/harborLogo';
import MainMenuItem from '@/components/atoms/mainMenuItem';
import UserMenuItem from '@/components/atoms/userMenuItem';

import {LEFT_MENU_ITEMS, RIGHT_MENU_ITEMS} from './mainNav.contants';

import styles from './mainNav.module.scss';

export default function MainNav () {
  return <nav className={styles.mainNavContainer}>
    <HarborLogo className={styles.brand}/>
    {
      LEFT_MENU_ITEMS.map((item: MainMenuItemProps) => {
        return <MainMenuItem key={item.label} {...item} />
      })
    }
    {
      RIGHT_MENU_ITEMS.map((item: MainMenuItemProps, index: number) => {
        return <MainMenuItem key={item.label} {...item} className={index === 0 && styles.rightSubMenu}/>
      })
    }
    <UserMenuItem />
  </nav>
}