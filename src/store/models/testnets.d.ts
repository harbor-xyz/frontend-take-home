import { Status, TestNetChainActors } from "./../../typings/models.d";
export interface TestNet {
  name: string;
  id: string;
  status: Status;
  updated_at: Date;
  testnet_off_chain_actors: TestNetChainActors[];
  testnet_chains: TestNetsChains[];
}

export interface TestNetsState {
  data: TestNet[];
  isLoading: boolean;
  error: boolean;
}
