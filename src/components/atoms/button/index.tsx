import { useCallback } from 'react';
import styles from './button.module.scss'

type ButtonProps = {
  btnContent?: string | React.ReactNode,
  handleClick?: any,
  btnType?: 'primary' | 'secondary' | 'tertiary',
  btnClasses?: any,
  btnStyles?: any,
}

const Button = ({btnContent, handleClick, btnClasses, btnStyles}: ButtonProps) => {
  const isBtnContentText = typeof btnContent === 'string';

  const handleBtnClick = useCallback((e: any) => {
    handleClick(e);
  }, [handleClick]);

  return <button
    className={`${styles.btnClass} ${btnClasses}`}
    style={btnStyles}
    name={isBtnContentText ? btnContent : undefined}
    value={isBtnContentText ? btnContent : undefined}
    onClick={handleClick ? handleBtnClick : undefined}>
      {btnContent}
    </button>
}

Button.defaultProps = {
  btnType: 'primary'
}

export default Button