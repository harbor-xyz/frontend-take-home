import { Dispatch, SetStateAction } from 'react'
import ButtonWithIcon from '@/components/molecules/buttonWithIcon'
import styles from './sidebarItem.module.scss'

type SidebarItemProps = {
  leftIcon?: string,
  title?: string,
  rightIcon?: string,
  count?: number,
  handleClick?: Dispatch<SetStateAction<string>>,
  activeTab?: string
}

const SidebarItem = ({
  leftIcon,
  title,
  rightIcon,
  count,
  handleClick,
  activeTab
}: SidebarItemProps) => {
  return (
    <ButtonWithIcon
      wrapperClass={`${styles.itemWrapper} ${activeTab === title ? styles.itemWrapperActive : ''}`}
      leftIcon={`/images/${leftIcon}.svg`}
      leftIconSize={16}
      btnClasses={`${styles.itemContent} ${activeTab === title ? styles.itemContentActive : ''}`}
      btnContent={title}
      rightIcon={`/images/${rightIcon}.svg`}
      rightIconSize={14}
      handleClick={handleClick}
    >
      { count ? <div className={styles.countWrapper}>{count}</div> : undefined }
    </ButtonWithIcon>
  )
}

export default SidebarItem