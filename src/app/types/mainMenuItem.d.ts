import type {ComponentType} from 'react';
import type {IconProps} from './icon';

export interface MainMenuItem extends IconProps {
  label: string;
  Icon: ComponentType<IconProps>;
  className?: string; 
}