import DashboardSidebar from '@/components/organisms/dashboardSidebar';

import styles from './dashboard.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.dashboardLayout}>
      <DashboardSidebar />
      {children}
    </div>
  )
}
