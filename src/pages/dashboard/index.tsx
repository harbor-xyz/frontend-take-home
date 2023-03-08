import Head from 'next/head'
import { ComponentProps, useState } from 'react';
import Layout from '@/components/organisms/layout'
import styles from './dashboard.module.scss'
import { TabViewMap } from './dashboard.constants';

export async function getServerSideProps() {
  // fetch the page data from the testnets api
  const res = await fetch(`${process.env.BASE_URL}/api/testnets`);
  const data = await res.json();

  return {
    props: { data }
  };
}

export default function Dashboard({data}: ComponentProps<any>) {
  const [activeTab, setActiveTab] = useState('Testnets');
  console.log({activeTab});
  
  return (
    <>
      <Head>
        <title>Harbor XYZ Dashboard</title>
      </Head>
      <Layout activeTab={activeTab} handleClick={(currentTab) => setActiveTab(currentTab)}>
        <div className={styles.mainContainer}>
          {TabViewMap[activeTab]()}
        </div>
      </Layout>
    </>
  )
}
