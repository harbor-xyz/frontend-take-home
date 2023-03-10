import { Dispatch, SetStateAction } from 'react'
import Header from '@/components/organisms/header'
import Sidebar from '@/components/organisms/sidebar'

import styles from './layout.module.scss'

type LayoutProps = {
  activeTab?: string,
  handleClick?: Dispatch<SetStateAction<string>>,
  children?: React.ReactNode
}

export default function Layout({activeTab, handleClick, children}: LayoutProps) {
  return (
    <div className={styles.pageLayout}>
      <Header/>
      <Sidebar activeTab={activeTab} handleClick={handleClick}/>
      <div className={styles.pageContent}>{children}</div>
    </div>
  )
}
