import Button from "@/components/atoms/button";
import TestnetCard from "@/components/molecules/testnetCard";
import styles from './testnetsView.module.scss';

type TestnetViewProps = {
  testnetsData: any
}

const TestnetsView = (props: TestnetViewProps) => {
  const { testnetsData } = props;
  const { testnet } = testnetsData;

  const renderTestnetCards = () => {
    return testnet.map((item: any) => {
      return <TestnetCard cardData={item} key={item.id} />
    })
  };
  
  return (
    <>
      <div className={styles.viewHeader}>
        <div className={styles.leftSection}>
          <span className={styles.headerText}>Testnets ({testnet.length})</span>
          <Button btnClasses={styles.linkBtn} btnContent={'+ New Testnet'}/>
        </div>
        <div className={styles.rightSection}>
        </div>
      </div>
      <div className={styles.viewContent}>
        {renderTestnetCards()}
      </div>
    </>
  )
}

export default TestnetsView