import Image from 'next/image'
import styles from './testnetCard.module.scss'
import { TESTNET_STATUS } from './testnetCard.constants'

import dotSeparator from '../../../../public/images/dot.svg'
import hourGlass from '../../../../public/images/hourglass.svg'
import ButtonWithIcon from '../buttonWithIcon'

import { timeFromNow } from '@/utils'

type CardProps = {
  cardData: any;
}

const TestnetCard = ({cardData}: CardProps) => {
  const { name, status, testnet_off_chain_actors, testnet_chains, updated_at } = cardData;

  const offChainUpdatingCount = testnet_off_chain_actors.filter((chain: any) => chain.status === TESTNET_STATUS.UPDATING).length;
  const isChainUpdating = testnet_chains.find((chain: any) => chain.status === TESTNET_STATUS.UPDATING);

  return <div className={styles.cardWrapper}>
    <div className={styles.leftSection}>
      <div className={styles.topChunkWrapper}>
          <span className="name">{name}</span>
          <span className="count">5321</span>
      </div>
      <div className={styles.midChunkWrapper}>
          <span className="chain-actor-count">{testnet_off_chain_actors?.length} off-chain actors</span>
          {
            testnet_chains?.length
            && (
              <>
                <Image src={dotSeparator} alt="dot separator"/>
                <span>{`${testnet_chains.length} Blockchain${testnet_chains.length > 1 ? 's' : ''}`}</span>
                <div>
                  {
                    testnet_chains.map((chainObj: any) => {
                      return (
                        <div className={styles.chainIconWrapper} key={chainObj.chain}>
                          <Image src={`/coins/${chainObj.chain}.svg`} width={16} height={16} alt="chain icon"/>
                        </div>
                      )
                    })
                  }
                </div>
              </>
            )
          }
      </div>
      {
        ((offChainUpdatingCount > 0) || isChainUpdating)
        && (
          <div className={styles.btmChunkWrapper}>
            {
              (offChainUpdatingCount > 0
                && (
                  <div>
                    <ButtonWithIcon leftIcon={hourGlass} btnContent={`${offChainUpdatingCount} off-chain updating`}></ButtonWithIcon>
                  </div>
                ))
                || (isChainUpdating && (
                  <>
                    <Image src={dotSeparator} alt="dot separator"/>
                    <div>
                      <ButtonWithIcon leftIcon={hourGlass} btnContent={`blockchain updating`}></ButtonWithIcon>
                    </div>
                  </>
                  
                ))
            }
          </div>
        )
      }
    </div>
    <div className={styles.rightSection}>
      <div className={styles.topChunkWrapper}>
        <ButtonWithIcon leftIcon={`/images/${status.toLowerCase()}.svg`} wrapperClass={styles.btnWithIconWrapper} btnClasses={styles.textWrapper} leftIconSize={14} btnContent={status}></ButtonWithIcon>
        <Image src={dotSeparator} alt="dot separator"/>
        <ButtonWithIcon leftIcon={`/images/settings.svg`} wrapperClass={styles.btnWithIconWrapper} btnClasses={styles.textWrapper} leftIconSize={14} btnContent={'Settings'}></ButtonWithIcon>
      </div>
      <div>
        <ButtonWithIcon leftIcon={`/images/timer.svg`} leftIconSize={14} wrapperClass={styles.btnWithIconWrapper} btnClasses={styles.timeTextWrapper} btnContent={`Modified ${timeFromNow(updated_at)}`}></ButtonWithIcon>
      </div>
    </div>
  </div>
}

export default TestnetCard;