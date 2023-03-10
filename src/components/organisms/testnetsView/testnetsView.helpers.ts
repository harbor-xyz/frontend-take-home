import { TESTNET_STATUS_ICON_MAPPING, TESTNET_STATUS_COLOR_MAPPING } from '@/constants/globals';
import { STATUS_LABEL_MAPPING, SORT_TYPE } from './testnetsView.constants';

export const createFilterOptions = (statuses: Array<string>) => {
  const options = statuses.map((status) => {
    return {
      value: status,
      label: STATUS_LABEL_MAPPING[status],
      icon: TESTNET_STATUS_ICON_MAPPING[status],
      color: TESTNET_STATUS_COLOR_MAPPING[status]
    }
  });
  const filterOptions = [{
    value: 'ALL',
    label: STATUS_LABEL_MAPPING['ALL'],
    icon: TESTNET_STATUS_ICON_MAPPING['ALL'],
    color: TESTNET_STATUS_COLOR_MAPPING['ALL']
  }, ...options];

  return filterOptions;
}

export const getFilteredAndSortedData = ({data, currentFilter, currentSort}: any) => {
  const filteredData = (!currentFilter || currentFilter === 'ALL') ? data : data.filter((testnet: any) => testnet.status === currentFilter)
  const filteredAndSortedData = filteredData.sort((a: any, b: any) => {
    switch (currentSort) {
      case SORT_TYPE.ASC:
        return a.name - b.name ? 1 : ((b.name > a.name) ? -1 : 0);
      case SORT_TYPE.DESC:
        return b.name - a.name ? 1 : ((a.name > b.name) ? -1 : 0);
      case SORT_TYPE.STATUS:
        return a.status - b.status ? 1 : ((b.status > a.status) ? -1 : 0);
      case SORT_TYPE.CREATED_AT:
        return (+new Date(a.created_at) - +new Date(b.created_at));
      case SORT_TYPE.UPDATED_AT:
        return (+new Date(a.updated_at) - +new Date(b.updated_at));
    }
  })
  return filteredAndSortedData;
}