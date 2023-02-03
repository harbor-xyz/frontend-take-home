export enum Status {
  RUNNING = "RUNNING",
  STANDING = "STANDING",
  UPDATING = "UPDATING",
  PENDING = "PENDING",
  CLONING = "CLONING",
  FAILED = "FAILED",
  STOPPED = "STOPPED",
  KILLED = "KILLED",
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

export enum Sorters {
  NAME = "NAME",
  STATUS = "STATUS",
  CREATED = "CREATED",
  UPDATED = "UPDATED",
}
