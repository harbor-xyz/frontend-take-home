type stringMap = {
  [key: string]: string
}

export const TESTNET_STATUS_ICON_MAPPING: stringMap = {
  ALL: "all",
  RUNNING: "running",
  PENDING: "hourglass",
  UPDATING: "hourglass",
  FAILED: "failed",
  STOPPED: "stopped"
}

export const TESTNET_STATUS_COLOR_MAPPING: stringMap = {
  ALL: "#2F80ED",
  RUNNING: "#509900",
  PENDING: "#DB9000",
  UPDATING: "#DB9000",
  FAILED: "#CD3A4C",
  STOPPED: "#555555"
}
