import Head from 'next/head'
import { ComponentProps, useState } from 'react';
import Layout from '@/components/organisms/layout'
import styles from './dashboard.module.scss'
import { TabViewMap } from './dashboard.constants';

export async function getServerSideProps() {
  // fetch the page data from the testnets api
  const res = await fetch(`${process.env.BASE_URL}/api/testnets`);
  const testnetsData = await res.json();
  const dashboardData = {
    testnetsData,
    membersData: [''], // data placeholders for other pages
    projectKeyData: [] // data placeholders for other pages
  }

  return {
    props: { dashboardData }
  };
}

export default function Dashboard({dashboardData}: ComponentProps<any>) {
  const [activeTab, setActiveTab] = useState('Testnets');
  const renderDashboardTab = () => {
    const TabViewComponent = TabViewMap[activeTab];
    return TabViewComponent(dashboardData);
  }
  
  return (
    <>
      <Head>
        <title>Harbor XYZ Dashboard</title>
      </Head>
      <Layout activeTab={activeTab} handleClick={(currentTab) => setActiveTab(currentTab)}>
        <div className={styles.mainContainer}>
          {renderDashboardTab()}
        </div>
      </Layout>
    </>
  )
}
