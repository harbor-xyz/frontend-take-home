import styles from './blockchainList.module.scss';

export default function blockchainList ({list}: any) {
  return <div className={styles.badgeList}>
    {
      list.map((blockchain: string) => {
        return <div key={blockchain} className={styles.badge}>
          <img src={`/blockchains/${blockchain}.png`} className={styles.logo} />
        </div>
      })
    }
  </div>
}