import type {ComponentType} from 'react';

import type {IconProps} from './icon';

interface SidebarMenuListItem {
  LeftIcon: ComponentType<IconProps>,
  label: string,
  RightIcon: ComponentType<IconProps>,
  count?: number,
  route: string,
}

export interface SidebarMenuListConfigType {
  title: 'Acme frontend',
  Icon: ComponentType<IconProps>,
  items: Array<SidebarMenuListItem>,
}

export interface SidebarMenuListProps {
  config: SidebarMenuListConfigType
}