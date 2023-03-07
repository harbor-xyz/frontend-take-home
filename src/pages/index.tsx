import Head from 'next/head'

type HomeProps = {
  data: any
}

export async function getServerSideProps() {
  // fetch the page data from the testnets api
  const res = await fetch(`${process.env.BASE_URL}/api/testnets`);
  const data = await res.json();

  return {
    props: { data }
  };
}

export default function Home({data}: HomeProps) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Harbor XYZ</title>
        <meta name="description" content="harbor frontend take home assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        next js page served
      </main>
    </>
  )
}
