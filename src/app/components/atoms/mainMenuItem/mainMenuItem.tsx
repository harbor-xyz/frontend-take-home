import Link from 'next/link';

import type {MainMenuItemProps} from '@/types';

import styles from './mainMenuItem.module.scss';

export default function mainMenuItem (props: MainMenuItemProps) {
  const {Icon, label, className} = props;

  return <Link className={`${styles.mainMenuItem} ${className}`} href="#">
    <Icon className={styles.icon} />
    {label}
  </Link>
}