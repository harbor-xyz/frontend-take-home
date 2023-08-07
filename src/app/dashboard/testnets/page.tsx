import Testnets from './testnets';

// fetch data from testnets api
async function getTestnetsData() {
  const response = await fetch(`${process.env.BASE_URL}/dashboard/testnets/api`);
  return response.json();
}

export default async function Page() {

  const data = await getTestnetsData();

  return (
    <Testnets data={data} />
  )
}