import { Sorters, Status, TestNetChainActors } from "./../../typings/models.d";
export interface TestNet {
  name: string;
  id: string;
  status: Status;
  updated_at: string;
  created_at: string;
  testnet_off_chain_actors: TestNetChainActors[];
  testnet_chains: TestNetsChains[];
}

export enum SortingOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface SortSelection {
  key: Sorters;
  order: SortingOrder;
}

export interface TestNetsState {
  data: TestNet[];
  originalData: TestNet[];
  isLoading: boolean;
  error: boolean;
  sortSelection: SortSelection;
  filterSelection: Status | "all";
}
