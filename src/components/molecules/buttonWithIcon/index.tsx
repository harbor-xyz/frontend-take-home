import Image from 'next/image'

import Button from '@/components/atoms/button';
import styles from './buttonWithIcon.module.scss'

type ButtonWithIconProps = {
  leftIcon?: any,
  btnContent?: React.ReactNode | string,
  rightIcon?: any,
  handleClick?: () => void
  btnType?: any,
  btnClasses?: any
}

const ButtonWithIcon = ({leftIcon, btnType, btnClasses, btnContent, rightIcon, handleClick}: ButtonWithIconProps) => {
  return <div className={styles.buttonWithIconWrap}>
    { leftIcon ? <Image src={leftIcon} alt="left icon"/> : undefined }
    <Button btnClasses={btnClasses} btnType={btnType} btnContent={btnContent} handleClick={handleClick} />
    { rightIcon ? <Image src={rightIcon} alt="left icon"/> : undefined }
  </div>
}

export default ButtonWithIcon