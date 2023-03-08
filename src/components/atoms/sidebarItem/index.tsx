import ButtonWithIcon from '@/components/molecules/buttonWithIcon'
import styles from './sidebarItem.module.scss';

type SidebarItemProps = {
  leftIcon?: string,
  title?: string,
  rightIcon?: string,
  count?: number
}

const SidebarItem = ({
  leftIcon,
  title,
  rightIcon,
  count
}: SidebarItemProps) => {
  return (
    <ButtonWithIcon
      wrapperClass={`${styles.itemWrapper} ${title === 'Testnets' ? styles.itemWrapperActive : ''}`}
      leftIcon={`/images/${leftIcon}.svg`}
      leftIconSize={16}
      btnClasses={`${styles.itemContent} ${title === 'Testnets' ? styles.itemContentActive : ''}`}
      btnContent={title}
      rightIcon={`/images/${rightIcon}.svg`}
      rightIconSize={14}
    >
      { count ? <div className={styles.countWrapper}>{count}</div> : undefined }
    </ButtonWithIcon>
  )
}

export default SidebarItem