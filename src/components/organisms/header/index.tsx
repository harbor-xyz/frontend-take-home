import Image from 'next/image'

import styles from './header.module.scss'
import harborLogo from '../../../../public/images/harbor-logo.svg'
import docsLogo from '../../../../public/images/docs.svg'
import cmdLineLogo from '../../../../public/images/cmd-line.svg'
import userKeyLogo from '../../../../public/images/user-key.svg';
import downLogo from '../../../../public/images/down.svg';
import dpLogo from '../../../../public/images/DP.png';

import ButtonWithIcon from '@/components/molecules/buttonWithIcon';

export default function Header() {
  
  return (
    <header className={styles.pageHeader}>
      <div className={styles.leftSection}>
        <div className={styles.logoContainer}>
          <Image src={harborLogo} alt="Harbor logo"/>
        </div>
        <div className={styles.btnWrapper}>
          <ButtonWithIcon btnClasses={styles.btnClass} leftIcon={docsLogo} btnContent={'Docs'}></ButtonWithIcon>
          <ButtonWithIcon btnClasses={styles.btnClass} leftIcon={cmdLineLogo} btnContent={'Command cheatsheet'}></ButtonWithIcon>
        </div>
      </div>
      <div className={styles.rightSection}>
        <ButtonWithIcon btnClasses={styles.btnClass} leftIcon={userKeyLogo} btnContent={'Your user key'}></ButtonWithIcon>
        <ButtonWithIcon btnClasses={styles.btnClass} leftIcon={dpLogo} rightIcon={downLogo}></ButtonWithIcon>
      </div>
    </header>
  )
}