import { TESTNET_STATUS } from "./constants";

export const isTestnetStatusRunning = (status) => {
  return status === TESTNET_STATUS.RUNNING || status === TESTNET_STATUS.STOPPED;
};
