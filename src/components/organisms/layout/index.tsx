import Header from '@/components/organisms/header'
import Sidebar from '@/components/organisms/sidebar'

import styles from './layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className={styles.pageLayout}>
      <Header/>
      <Sidebar/>
      <div className={styles.pageContent}>{children}</div>
    </div>
  )
}
