import { STATUS_LABEL_MAPPING, STATUS_ICON_MAPPING, STATUS_TEXT_COLOR_MAPPING } from './testnetsView.constants';

export const createFilterOptions = (statuses: Array<string>) => {
  const options = statuses.map((status) => {
    return {
      value: status,
      label: STATUS_LABEL_MAPPING[status],
      icon: STATUS_ICON_MAPPING[status],
      color: STATUS_TEXT_COLOR_MAPPING[status]
    }
  });
  const filterOptions = [{
    value: 'ALL',
    label: STATUS_LABEL_MAPPING['ALL'],
    icon: STATUS_ICON_MAPPING['ALL'],
    color: STATUS_TEXT_COLOR_MAPPING['ALL']
  }, ...options];

  return filterOptions;
}