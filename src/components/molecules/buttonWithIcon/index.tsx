import Image from 'next/image'

import Button from '@/components/atoms/button';
import styles from './buttonWithIcon.module.scss'

type ButtonWithIconProps = {
  wrapperClass?: any,
  leftIcon?: any,
  leftIconSize?: number,
  btnContent?: React.ReactNode | string,
  rightIcon?: any,
  rightIconSize?: number,
  handleClick?: () => void
  btnType?: any,
  btnClasses?: any,
  children?: React.ReactNode
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
  children
}: ButtonWithIconProps) => {
  return <div className={`${styles.buttonWithIconWrap} ${wrapperClass}`}>
    { leftIcon ? <Image src={leftIcon} width={leftIconSize} height={leftIconSize} alt="left icon"/> : undefined }
    <Button btnClasses={btnClasses} btnType={btnType} btnContent={btnContent} handleClick={handleClick} />
    { children }
    { rightIcon ? <Image src={rightIcon} width={rightIconSize} height={rightIconSize} alt="left icon"/> : undefined }
  </div>
}

export default ButtonWithIcon