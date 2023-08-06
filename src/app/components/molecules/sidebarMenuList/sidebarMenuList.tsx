'use client'

import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import type {SidebarMenuListProps} from '@/types';

import Button, {BUTTON_COLOR, BUTTON_SIZE, BUTTON_TYPE} from '@/components/atoms/button';

import styles from './sidebarMenuList.module.scss';

export default function SidebarMenuList (props: SidebarMenuListProps) {
  const {config: {
    title,
    Icon,
    items,
  }} = props;

  const pathname = usePathname()

  return (
    <section className={styles.sidebarMenuList}>
        <div className={styles.mainTitleSection}>
          <Icon className={styles.mainIcon}/>
          {title}
        </div>
        {
          items && <ul className={styles.list}>
            {
              items.map((item, index) => (
                <li key={item.label} className={cx(styles.listItem, {
                  [styles.active]: pathname === item.route
                })}>
                  <Link href={item.route}>
                    <item.LeftIcon className={styles.leftIcon}/>
                    <span className={styles.label}>{item.label}</span>
                  </Link>
                  { item.count && <span className={styles.count}>{item.count}</span>}
                  <Button
                    type={BUTTON_TYPE.TEXT}
                    color={BUTTON_COLOR.GREY}
                    size={BUTTON_SIZE.Medium}
                    BeforeIcon={item.RightIcon}
                    className={styles.rightIcon}
                  />
                </li>
              ))
            }
          </ul>
        }
      </section>
  );
}