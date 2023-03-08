import Head from 'next/head'
import {ComponentProps} from 'react';
import Layout from '@/components/organisms/layout'
import styles from './dashboard.module.scss'

export async function getServerSideProps() {
  // fetch the page data from the testnets api
  const res = await fetch(`${process.env.BASE_URL}/api/testnets`);
  const data = await res.json();

  return {
    props: { data }
  };
}

export default function Dashboard({data}: ComponentProps<any>) {
  return (
    <>
      <Head>
        <title>Harbor XYZ Dashboard</title>
      </Head>
      <Layout>
        <div className={styles.mainContainer}>
          Dashboard
        </div>
      </Layout>
    </>
  )
}
