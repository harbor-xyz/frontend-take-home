export enum SORT_TYPE {
  ASC = 'asc',
  DESC = 'desc',
  STATUS = 'status',
  CREATED = 'created',
  UPDATED = 'updated'
};

export const SORT_OPTIONS = [
  {
    label: 'Name A-Z',
    value: SORT_TYPE.ASC,
  },
  {
    label: 'Name Z-A',
    value: SORT_TYPE.DESC,
  },
  {
    label: 'Status',
    value: SORT_TYPE.STATUS,
  },
  {
    label: 'Date created',
    value: SORT_TYPE.CREATED,
  },
  {
    label: 'Last modified',
    value: SORT_TYPE.UPDATED,
  }
]