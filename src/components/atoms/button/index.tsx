import styles from './button.module.scss'

type ButtonProps = {
  btnContent?: string | React.ReactNode,
  handleClick?: () => void,
  btnType?: 'primary' | 'secondary' | 'tertiary',
  btnClasses?: any
}

const Button = ({btnContent, handleClick, btnClasses}: ButtonProps) => {
  const isBtnContentText = typeof btnContent === 'string';
  return <button
    className={`${styles.btnClass} ${btnClasses}`}
    name={isBtnContentText ? btnContent : undefined}
    value={isBtnContentText ? btnContent : undefined}
    onClick={handleClick}>
      {btnContent}
    </button>
}

Button.defaultProps = {
  btnType: 'primary'
}

export default Button