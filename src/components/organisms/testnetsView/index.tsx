import { useCallback, useEffect, useState } from "react";
import Image from 'next/image'

import Button from "@/components/atoms/button";
import TestnetCard from "@/components/molecules/testnetCard";
import SelectDropdown from "@/components/atoms/select";
import dotSeparator from '../../../../public/images/dot.svg'
import { createFilterOptions } from './testnetsView.helpers';

import styles from './testnetsView.module.scss';

type TestnetViewProps = {
  testnetsData: any
}

const sortOptions: any = [{
  label: 'Name A-Z',
  value: 'ASC'
}];

const TestnetsView = (props: TestnetViewProps) => {
  const { testnetsData } = props;
  const { testnet } = testnetsData;

  const [filterOptions, setFilterOptions] = useState<any[]>([]);

  const renderTestnetCards = () => {
    return testnet.map((item: any) => {
      return <TestnetCard cardData={item} key={item.id} />
    })
  };

  useEffect(() => {
    const statuses = testnet.map((item: any) => item.status);
    const uniqueStatuses: Array<string> = Array.from(new Set(statuses));
    const filterOptions = createFilterOptions(uniqueStatuses);
    setFilterOptions(filterOptions);
  }, [testnet]);

  const applyFilter = useCallback((ev: any) => {
    console.log(ev);
  }, []);

  const applySort = useCallback((ev: any) => {
    console.log(ev);
  }, []);
  
  return (
    <>
      <div className={styles.viewHeader}>
        <div className={styles.leftSection}>
          <span className={styles.headerText}>Testnets ({testnet.length})</span>
          <Button btnClasses={styles.linkBtn} btnContent={'+ New Testnet'}/>
        </div>
        <div className={styles.rightSection}>
          { 
            filterOptions?.length && (
              <>
                <SelectDropdown options={filterOptions} label={'Filter by: '} handleChange={applyFilter}/>
                <Image src={dotSeparator} alt="dot separator"/>
              </>
            )
          }
          <SelectDropdown options={sortOptions} label={'Sort by: '} handleChange={applySort}></SelectDropdown>
        </div>
      </div>
      <div className={styles.viewContent}>
        {renderTestnetCards()}
      </div>
    </>
  )
}

export default TestnetsView