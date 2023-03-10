import variables from '@/styles/_variables.module.scss'

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
  ALL: variables.activeColor,
  RUNNING: variables.successColor,
  PENDING: variables.goldenColor,
  UPDATING: variables.goldenColor,
  FAILED: variables.errorColor,
  STOPPED: variables.deadColor
}
