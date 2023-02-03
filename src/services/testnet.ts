import { API_BASE_URL } from "../constants/api";
import { TestNet } from "../store/models/testnets";

export const getTestNets = async () => {
  const response = await fetch(`${API_BASE_URL}/testnets`);
  const json = await response.json();
  const testnets = json.data.testnet as TestNet[];
  return testnets;
};
