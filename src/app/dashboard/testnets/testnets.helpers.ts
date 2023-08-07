import {
  TESTNET_STATUS_TEXT_MAPPING,
  TESTNET_STATUS_COLOR_MAPPING,
  TESTNET_STATUS_ICON_MAPPING,
} from '@/components/molecules/testnetCard/testnetCard.constants';

import {SORT_TYPE} from './testnets.contants';

export const getFilterOptions = (list: any[]) => {
  const countMap = new Map();
  const options = [];

  list.forEach((item:any) => {
    const {status} = item;
    const currentCount = countMap.get(status) || 0;
    
    countMap.set(status, currentCount + 1);
  })

  for (let status in TESTNET_STATUS_TEXT_MAPPING) {
    options.push({
      value: status,
      count: TESTNET_STATUS_TEXT_MAPPING.ALL === TESTNET_STATUS_TEXT_MAPPING[status] ? list.length : countMap.get(status) || 0,
      label: TESTNET_STATUS_TEXT_MAPPING[status],
      Icon: TESTNET_STATUS_ICON_MAPPING[status],
      color: TESTNET_STATUS_COLOR_MAPPING[status],
    })
  }

  return options;
}

export const getResults = (data: any, selectedFilter: string, selectedSort:string) => {
  const filtered = !selectedFilter || selectedFilter === 'ALL'? data : data.filter((item: any) => item.status === selectedFilter);

  const filteredAndSorted = filtered.sort((a: any, b: any) => {
    switch (selectedSort) {
      case SORT_TYPE.ASC:
        return a.name.localeCompare(b.name);
      case SORT_TYPE.DESC:
        return b.name.localeCompare(a.name);
      case SORT_TYPE.STATUS:
        const aStatusText = TESTNET_STATUS_TEXT_MAPPING[a.status];
        const bStatusText = TESTNET_STATUS_TEXT_MAPPING[b.status]
        return aStatusText.localeCompare(bStatusText);
      case SORT_TYPE.CREATED:
        return (new Date(a.created_at)).getTime() - (new Date(b.created_at)).getTime();
      case SORT_TYPE.UPDATED:
        return (new Date(a.updated_at)).getTime() - (new Date(b.updated_at)).getTime();
    }
  })
  return filteredAndSorted;
}