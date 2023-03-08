import Image from 'next/image'

import Button from '@/components/atoms/button';
import styles from './buttonWithIcon.module.scss'
import { useCallback } from 'react';

type ButtonWithIconProps = {
  wrapperClass?: any,
  leftIcon?: any,
  leftIconSize?: number,
  btnContent?: React.ReactNode | string,
  rightIcon?: any,
  rightIconSize?: number,
  handleClick?: any
  btnType?: any,
  btnClasses?: any,
  children?: React.ReactNode,
}

const ButtonWithIcon = ({
  wrapperClass,
  leftIcon,
  leftIconSize,
  btnType,
  btnClasses,
  btnContent,
  rightIcon,
  rightIconSize,
  handleClick,
  children,
}: ButtonWithIconProps) => {

  const handleWrapperClick = useCallback((e: any) => {
    if (handleClick) {
      handleClick(btnContent);
    }
  }, [handleClick, btnContent]);

  return <div className={`${styles.buttonWithIconWrap} ${wrapperClass}`} onClick={handleWrapperClick}>
    { leftIcon ? <Image src={leftIcon} width={leftIconSize} height={leftIconSize} alt="left icon"/> : undefined }
    <Button btnClasses={btnClasses} btnType={btnType} btnContent={btnContent}/>
    { children }
    { rightIcon ? <Image src={rightIcon} width={rightIconSize} height={rightIconSize} alt="left icon"/> : undefined }
  </div>
}

export default ButtonWithIcon