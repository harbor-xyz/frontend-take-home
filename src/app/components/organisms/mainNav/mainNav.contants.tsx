import type {MainMenuItemProps} from '@/types';

import ProjectsIcon from '@/components/icons/projects';
import Docs from '@/components/icons/docs';
import CommandSheet from '@/components/icons/commandSheet';
import UserKey from '@/components/icons/userKey';

export const LEFT_MENU_ITEMS: Array<MainMenuItemProps> = [
  {
    label: 'Projects',
    Icon: ProjectsIcon,
  },
  {
    label: 'Docs',
    Icon: Docs,
  },
  {
    label: 'Command cheatsheet',
    Icon: CommandSheet,
  },
]

export const RIGHT_MENU_ITEMS: Array<MainMenuItemProps> = [
  {
    label: 'Your user key',
    Icon: UserKey,
  },
]