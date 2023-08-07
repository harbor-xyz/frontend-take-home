import Image from 'next/image';

import styles from './blockchainList.module.scss';

export default function blockchainList ({list}: any) {
  return <div className={styles.badgeList}>
    {
      list.map((blockchain: string) => {
        return <div key={blockchain} className={styles.badge}>
          <Image src={`/blockchains/${blockchain}.png`} width={16} height={16} alt={blockchain}/>
        </div>
      })
    }
  </div>
}