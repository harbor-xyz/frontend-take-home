import cx from 'classnames';

import type {SidebarMenuListProps} from '@/types';

import Button, {BUTTON_COLOR, BUTTON_SIZE, BUTTON_TYPE} from '@/components/atoms/button';

import styles from './sidebarMenuList.module.scss';

export default function SidebarMenuList (props: SidebarMenuListProps) {
  const {config: {
    title,
    Icon,
    items,
  }} = props;

  return (
    <div className={styles.sidebarMenuList}>
        <div className={styles.mainTitleSection}>
          <Icon className={styles.mainIcon}/>
          Acme Frontend
        </div>
        {
          items && <ul className={styles.list}>
            {
              items.map((item, index) => (
                <li key={item.label} className={cx(styles.listItem, {
                  [styles.active]: !index
                })}>
                  <item.LeftIcon className={styles.leftIcon}/>
                  <span className={styles.label}>{item.label}</span>
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
      </div>
  );
}