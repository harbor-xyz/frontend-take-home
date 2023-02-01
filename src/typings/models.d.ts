export enum Status {
  RUNNING = "running",
  STANDING = "standing",
  UPDATING = "updating",
  FAILED = "failed",
  KILLED = "killed",
  CLONING = "cloning",
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
  state: Status;
}

export interface TestNetChainActors {
  name: string;
  status: Status;
}
