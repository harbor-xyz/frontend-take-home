type stringMap = {
  [key: string]: string
}

export const STATUS_LABEL_MAPPING: stringMap = {
  ALL: "All",
  RUNNING: "Running",
  PENDING: "Standing Up",
  UPDATING: "Updating",
  FAILED: "Failed",
  STOPPED: "Stopped"
}

export const SORT_TYPE = {
  ASC: 'asc',
  DESC: 'desc',
  STATUS: 'status',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at'
}

export const SORT_OPTIONS = [
  {
    label: 'Name A-Z',
    value: SORT_TYPE.ASC
  },
  {
    label: 'Name Z-A',
    value: SORT_TYPE.DESC
  },
  {
    label: 'Status',
    value: SORT_TYPE.STATUS
  },
  {
    label: 'Date created',
    value: SORT_TYPE.CREATED_AT
  },
  {
    label: 'Last modified',
    value: SORT_TYPE.UPDATED_AT
  }
]