import type {ComponentType} from 'react';
import type {IconProps} from './icon';

import {BUTTON_SIZE, BUTTON_TYPE, BUTTON_COLOR} from '@/components/button/button.constants';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  size?: keyof typeof BUTTON_SIZE;
  color?: keyof typeof BUTTON_COLOR;
  type?: keyof typeof BUTTON_TYPE;
  BeforeIcon?: ComponentType<IconProps>;
  AeforeIcon?: ComponentType<IconProps>;
  beforeIconClassName?: string;
  afterIconClassName?: string;
  children?: React.ReactNode;
}