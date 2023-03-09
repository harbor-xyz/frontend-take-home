type stringMap = {
  [key: string]: string
}

export const STATUS_LABEL_MAPPING: stringMap = {
  ALL: "All",
  RUNNING: "Running",
  PENDING: "Standing Up",
  UPDATING: "Updating",
  FAILED: "Failed",
  STOPPED: "Killed"
}

export const STATUS_ICON_MAPPING: stringMap = {
  ALL: "all",
  RUNNING: "running",
  PENDING: "hourglass",
  UPDATING: "hourglass",
  FAILED: "failed",
  STOPPED: "killed"
}

export const STATUS_TEXT_COLOR_MAPPING: stringMap = {
  ALL: "#2F80ED",
  RUNNING: "#509900",
  PENDING: "#DB9000",
  UPDATING: "#DB9000",
  FAILED: "#CD3A4C",
  STOPPED: "#555555"
}