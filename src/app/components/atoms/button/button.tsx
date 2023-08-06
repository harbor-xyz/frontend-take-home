import cx from 'classnames';

import type {ButtonProps} from '@/types';
import {BUTTON_SIZE, BUTTON_TYPE, BUTTON_COLOR} from './button.constants';

import styles from './button.module.scss';

export default function Button (props: ButtonProps) {
  const {
    disabled,
    size = BUTTON_SIZE.Medium,
    type = BUTTON_TYPE.TEXT,
    color = BUTTON_COLOR.BLUE,
    children,
    BeforeIcon,
    beforeIconClassName,
    AeforeIcon,
    afterIconClassName,
    className,
  } = props;
  return (
    <button className={`${cx(
      styles.button,
      {
        [styles.disabled]: disabled,
        [styles.small]: size === BUTTON_SIZE.Small,
        [styles.medium]: size === BUTTON_SIZE.Medium,
        [styles.large]: size === BUTTON_SIZE.Large,
        [styles.text]: type === BUTTON_TYPE.TEXT,
        [styles.filled]: type === BUTTON_TYPE.FILLED,
        [styles.blue]: color === BUTTON_COLOR.BLUE,
        [styles.green]: color === BUTTON_COLOR.GREEN,
        [styles.purple]: color === BUTTON_COLOR.PURPLE,
        [styles.orange]: color === BUTTON_COLOR.ORANGE,
        [styles.red]: color === BUTTON_COLOR.RED,
        [styles.grey]: color === BUTTON_COLOR.GREY,
      }
    )} ${className}`}>
      {BeforeIcon && <BeforeIcon className={cx(styles.icon, beforeIconClassName)} />}
      {children}
      {AeforeIcon && <AeforeIcon className={cx(styles.icon, afterIconClassName)} />}
    </button>
  );
}