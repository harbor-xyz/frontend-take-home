import UserIcon from '@/components/icons/user';
import ArrowDownShort from '@/components/icons/arrowDownShort';

import styles from './userMenuItem.module.scss';

export default function UserMenuItem () {
  return <div className={styles.userMenuItem}>
    <UserIcon className={styles.userIcon} />
    <ArrowDownShort className={styles.arrowIcon} />
  </div>
}