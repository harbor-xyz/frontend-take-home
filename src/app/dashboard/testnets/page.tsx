'use client';

import Testnets from './testnets';

export const dynamic = "force-dynamic";

// fetch data from testnets api
async function getTestnetsData() {
  const response = await fetch(`${process.env.VERCEL_URL}/dashboard/testnets/api`);
  return response.json();
}

export default async function Page() {

  const data = await getTestnetsData();

  return (
    <Testnets data={data} />
  )
}