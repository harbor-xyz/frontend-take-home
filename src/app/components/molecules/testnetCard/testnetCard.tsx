import styles from './testnetCard.module.scss';

import Button, {BUTTON_COLOR, BUTTON_SIZE} from '@/components/atoms/button';
import SettingsIcon from '@/components/icons/settings';
import HourGlassIcon from '@/components/icons/hourGlass';
import ClockIcon from '@/components/icons/clock';
import BlockchainList from '@/components/atoms/blockchainList';
import Dot from '@/components/atoms/dot';

import {
  TESTNET_STATUSES,
  TESTNET_STATUS_ICON_MAPPING,
  TESTNET_STATUS_COLOR_MAPPING,
  TESTNET_STATUS_TEXT_MAPPING
} from './testnetCard.constants';

import {
  shouldDisableSettings,
  getAllBlockchains,
  getUpdatingOffChainCount,
  getTimeSince,
} from './testnetCard.helpers';


export default function TestnetCard ({data}: any) {
  const {
    name,
    status,
    testnet_off_chain_actors,
    testnet_chains,
    updated_at,
  } = data;

  const disableSettings = shouldDisableSettings(status);

  const allCoins = getAllBlockchains(testnet_chains);
  const updatingCount = getUpdatingOffChainCount(testnet_off_chain_actors);
  
  return (
    <div className={styles.testnetCard}>
      <div className={styles.row}>
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.count}>5321</span>
        <Button
          BeforeIcon={TESTNET_STATUS_ICON_MAPPING[status]}
          className={styles.leftAuto}
          color={TESTNET_STATUS_COLOR_MAPPING[status]}
          size={BUTTON_SIZE.Small}>
            {TESTNET_STATUS_TEXT_MAPPING[status]}
        </Button>
        <Dot />
        <Button
          disabled={disableSettings}
          BeforeIcon={SettingsIcon}
          color={BUTTON_COLOR.BLUE}
          size={BUTTON_SIZE.Small}
        >
          Settings
        </Button>
      </div>
      <div className={styles.row}>
        {testnet_off_chain_actors && <span>
          {testnet_off_chain_actors.length} off-chain actor{testnet_off_chain_actors.length > 1 ? 's' : ''}
        </span>}
        {allCoins && allCoins.length > 0 && <>
          <Dot />
          <span>{`${allCoins.length} Blockchain${allCoins.length > 1 ? 's' : ''}`}</span>
          <BlockchainList list={allCoins} />
        </>}
        <div className={styles.timeStamp}>
          <ClockIcon className={styles.clockIcon}/> Modified {getTimeSince(updated_at)}
        </div>
      </div>
      {
        updatingCount > 0 &&  <div className={styles.row}>
          <Button
            BeforeIcon={HourGlassIcon}
            size={BUTTON_SIZE.Small}
            color={BUTTON_COLOR.ORANGE}
          >
            {updatingCount} off-chain{updatingCount === 1 ? '' : 's'} updating
          </Button>
          <Dot />
          <Button
            BeforeIcon={HourGlassIcon}
            size={BUTTON_SIZE.Small}
            color={BUTTON_COLOR.ORANGE}
          >
            Blockchains updating
          </Button>
        </div>
      }
    </div>
  );
}