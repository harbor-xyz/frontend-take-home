import type {ComponentType} from 'react';
import type {IconProps} from '@/types';

import {BUTTON_COLOR} from '@/components/atoms/button';
import AllStatusIcon from '@/components/icons/allStatus';
import RunningTickIcon from '@/components/icons/runningTick';
import HourGlassIcon from '@/components/icons/hourGlass';
import CloningIcon from '@/components/icons/cloning';
import FailedIcon from '@/components/icons/failed';
import KilledIcon from '@/components/icons/killed';

type TestnetStatusIconMap = Record<string, ComponentType<IconProps>>;
type TestnetStatusColorMap  = Record<string, BUTTON_COLOR>;
type TestnetStatusTextMap  = Record<string, string>;

export enum TESTNET_STATUSES {
  RUNNING = 'RUNNING',
  PENDING = 'PENDING',
  UPDATING = 'UPDATING',
  CLONING = 'CLONING',
  FAILED = 'FAILED',
  STOPPED = 'STOPPED',
}

export const TESTNET_STATUS_ICON_MAPPING: TestnetStatusIconMap = {
  ALL: AllStatusIcon,
  RUNNING: RunningTickIcon,
  PENDING: HourGlassIcon,
  UPDATING: HourGlassIcon,
  CLONING: CloningIcon,
  FAILED: FailedIcon,
  STOPPED: KilledIcon,
}

export const TESTNET_STATUS_COLOR_MAPPING: TestnetStatusColorMap = {
  ALL: BUTTON_COLOR.BLUE,
  RUNNING: BUTTON_COLOR.GREEN,
  PENDING: BUTTON_COLOR.ORANGE,
  UPDATING: BUTTON_COLOR.ORANGE,
  CLONING: BUTTON_COLOR.PURPLE,
  FAILED: BUTTON_COLOR.RED,
  STOPPED: BUTTON_COLOR.GREY,
}

export const TESTNET_STATUS_TEXT_MAPPING: TestnetStatusTextMap = {
  ALL: 'All',
  RUNNING: 'Running',
  PENDING: 'Standing Up',
  UPDATING: 'Updaing',
  CLONING: 'Cloning',
  FAILED: 'Failed',
  STOPPED: 'Killed',
}