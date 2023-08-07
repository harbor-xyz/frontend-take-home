import Testnets from './testnets';

// fetch data from testnets api
async function getTestnetsData() {
  const response = await fetch(`https://api.jsonbin.io/v3/b/64d13f588e4aa6225ecc46a5/latest`, {
    headers: {
      'X-Access-Key': '$2b$10$FJoY/.GkgQCrRuwmncCXyenN.LjGQJT2smfLMjJrlloNQUUliqa8G',
    }
  });
  return response.json();
}

export default async function Page() {

  const data = await getTestnetsData();

  return (
    <Testnets data={data.record.testnet} />
  )
}