import type {MainMenuItemProps} from '@/types';

import styles from './mainMenuItem.module.scss';

export default function mainMenuItem (props: MainMenuItemProps) {
  const {Icon, label, className} = props;

  return <a className={`${styles.mainMenuItem} ${className}`} href="#">
    <Icon className={styles.icon} />
    {label}
  </a>
}