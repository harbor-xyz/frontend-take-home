import type {SidebarMenuListConfigType} from '@/types';

import StarIcon from '@/components/icons/star';
import TestnetsIcon from '@/components/icons/testnets';
import AddIcon from '@/components/icons/add';
import CopyToClipboardIcon from '@/components/icons/copyToClipboard';
import MembersIcon from '@/components/icons/members';
import ProjectKeyIcon from '@/components/icons/projectKey';

export const SIDEBAR_CONFIG: SidebarMenuListConfigType = {
  title: 'Acme frontend',
  Icon: StarIcon,
  items: [
    {
      LeftIcon: TestnetsIcon,
      label: 'Testnets',
      RightIcon: AddIcon,
      count: 8,
      route: '/dashboard/testnets',
    },
    {
      LeftIcon: MembersIcon,
      label: 'Members',
      RightIcon: AddIcon,
      count: 1,
      route: '/dashboard/members',
    },
    {
      LeftIcon: ProjectKeyIcon,
      label: 'Project Key',
      RightIcon: CopyToClipboardIcon,
      route: '/dashboard/projectKey',
    }
  ]
}