export enum Status {
  RUNNING = "RUNNING",
  STANDING = "STANDING",
  UPDATING = "UPDATING",
  FAILED = "FAILED",
  STOPPED = "STOPPED",
  KILLED = "KILLED",
  CLONING = "CLONING",
  PENDING = "PENDING",
}

export enum BlockChains {
  ETHEREUM = "ethereum",
  POLYGON = "polygon",
  OPTIMISM = "optimism",
  ALCHEMY = "alchemy",
  ARBITRUM = "atrbitrum",
}

export interface TestNetsChains {
  chain: BlockChains;
  status: Status;
}

export interface TestNetChainActors {
  name: string;
  status: Status;
}
