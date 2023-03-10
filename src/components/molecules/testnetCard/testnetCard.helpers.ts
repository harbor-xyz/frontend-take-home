import variables from '@/styles/_variables.module.scss'
import { TESTNET_STATUS } from './testnetCard.constants'

export const parseCardData = (testnet_off_chain_actors: any, testnet_chains: any) => {
  const offChainUpdatingCount = testnet_off_chain_actors.filter((chain: any) => chain.status === TESTNET_STATUS.UPDATING).length;
  const isChainUpdating = testnet_chains.find((chain: any) => chain.status === TESTNET_STATUS.UPDATING);
  return [offChainUpdatingCount, isChainUpdating];
}

export const getCardStylesFromStatus = (status: string) => {
  let borderColor = variables.secondaryBorderColor;
  let backgroundColor = variables.white;
  switch (status) {
    case (TESTNET_STATUS.FAILED):
      borderColor = variables.errorColor;
      backgroundColor = variables.failedBgColor;
      break;
    case (TESTNET_STATUS.STOPPED):
      borderColor = variables.stoppedBorderColor;
      backgroundColor = 'transparent';
      break;
  }
  return {
    borderColor,
    backgroundColor
  }
}