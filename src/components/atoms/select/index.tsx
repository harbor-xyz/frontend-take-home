import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './select.module.scss'
import downArrow from '../../../../public/images/down.svg'
import ButtonWithIcon from '@/components/molecules/buttonWithIcon'

type SelectDropdownProps = {
  options: Array<string | React.ReactNode>,
  label?: string | React.ReactNode,
  handleChange: Dispatch<SetStateAction<any>>
}

const SelectDropdown = ({
  options,
  label,
  handleChange
}: SelectDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isSelectActive, setSelectAsActive] = useState(false);

  const onHeaderClick = useCallback((e: any) => {
    setSelectAsActive(!isSelectActive);
    e.stopPropagation();
  }, [isSelectActive]);

  const handleOptionClick = useCallback((selected: string) => () => {
    setSelectedValue(selected);
    handleChange(selected);
    setSelectAsActive(false);
  }, [handleChange]);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setSelectAsActive(false);
      }
    }
    window.addEventListener('click', pageClickEvent);
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  });

  return (
    <div className={styles.selectWrapper}>
      <div className={styles.selectDisplay} onClick={onHeaderClick}>
        {label && <span className={styles.selectLabel}>{label}</span>}
        <span className={styles.selectedValue}>{selectedValue}</span>
        <Image src={downArrow} alt={'down arrow'} width={8} height={8}/>
      </div>
      <div ref={dropdownRef} className={`${styles.optionsWrapper} ${isSelectActive && styles.activeDropdown}`}>
        {
          options.map((option: any, idx) => {
            return <ButtonWithIcon wrapperClass={`${styles.optionWrapper} ${option === selectedValue && styles.activeOption}`} btnClasses={styles.optionText} btnContent={option} key={idx} handleClick={handleOptionClick(option)}></ButtonWithIcon>
          })
        }
      </div>
    </div>
  )
}

export default SelectDropdown;