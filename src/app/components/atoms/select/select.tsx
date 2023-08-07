'use client';

import {useCallback, useState} from 'react';
import cx from 'classnames';

import ArrowDownShort from '@/components/icons/arrowDownShort';

import styles from './select.module.scss';

const getSelectedOption = (options: any[], selectedValue: string) => {
  return options.find((option: any) => {
    if (option.value === selectedValue) return option;
  });
}

export default function Select (props: any) {
  const {
    options,
    label,
    className,
    onChange,
    value,
    renderSelectedValue,
    renderOption,
  } = props;

  const [show, setShow] = useState<boolean>(false);

  const handleOnChange = useCallback((val: string)=>()=>{
    onChange(val);
    setShow(false);
  }, [onChange, setShow])

  const handleShow = useCallback(()=>{
    setShow(true);
  }, [setShow]);

  const handleHide = useCallback(()=>{
    setShow(false);
  }, [setShow]);

  const selectedOption = getSelectedOption(options, value);

  return (
    <div className={cx(styles.select, className)}>
      <div className={styles.labelContainer} onClick={handleShow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.selectedValue}>{renderSelectedValue ? renderSelectedValue(selectedOption) : selectedOption?.label}</span>
        <ArrowDownShort className={styles.downArrow}/>
      </div>
      <div className={cx(styles.transparentBG,{
        [styles.show]: show,
      })} onClick={handleHide}/>
      <div className={cx(styles.optionsContainer,{
        [styles.show]: show,
      })}>
        {options && <ul className={styles.optionsList}>
            {
              options.map((option: any)=> {
                const classNames = cx(styles.option,
                  {
                    [styles.selected]: value === option.value
                  }
                );

                return renderOption ? renderOption(option, value, handleOnChange, classNames) : <li
                  key={option.value}
                  className={classNames}
                  onClick={handleOnChange(option.value)}
                >
                  {option.label}
                </li>
              })
            }
          </ul>
        }
      </div>
    </div>
  );
}