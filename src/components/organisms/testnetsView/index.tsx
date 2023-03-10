import { useCallback, useEffect, useState } from "react";
import Image from 'next/image'

import TestnetCard from "@/components/molecules/testnetCard";
import SelectDropdown from "@/components/atoms/select";
import dotSeparator from '../../../../public/images/dot.svg'
import { SORT_OPTIONS } from "./testnetsView.constants";
import { createFilterOptions, getFilteredAndSortedData } from './testnetsView.helpers';

import styles from './testnetsView.module.scss';
import ButtonWithIcon from "@/components/molecules/buttonWithIcon";

type TestnetViewProps = {
  testnetsData: any
}

const TestnetsView = (props: TestnetViewProps) => {
  const { testnetsData } = props;
  const { testnet: listData } = testnetsData;

  const [filterOptions, setFilterOptions] = useState<any[]>([]);
  const [currentSort, setCurrentSort] = useState('');
  const [currentFilter, setCurrentFilter] = useState('');
  const [filteredAndSortedData, setFilteredAndSortedData] = useState<any[]>([]);

  const renderTestnetCards = () => {
    return filteredAndSortedData.map((item: any) => {
      return <TestnetCard cardData={item} key={item.id} />
    })
  };

  useEffect(() => {
    const statuses = listData.map((item: any) => item.status);
    const uniqueStatuses: Array<string> = Array.from(new Set(statuses));
    const filterOptions = createFilterOptions(uniqueStatuses);
    setFilterOptions(filterOptions);
    setCurrentFilter(filterOptions[0].value);
    setCurrentSort(SORT_OPTIONS[0].value);
    setFilteredAndSortedData(listData);
  }, [listData]);

  useEffect(() => {
    const data = getFilteredAndSortedData({data: listData, currentFilter, currentSort});
    setFilteredAndSortedData([...data]);
  }, [listData, currentFilter, currentSort]);

  const applyFilter = useCallback((filterKey: string) => {
    setCurrentFilter(filterKey);
  }, []);

  const applySort = useCallback((sortKey: string) => {
    setCurrentSort(sortKey);
  }, []);
  
  return (
    <>
      <div className={styles.viewHeader}>
        <div className={styles.leftSection}>
          <span className={styles.headerText}>Testnets ({listData.length})</span>
          <ButtonWithIcon leftIconSize={14} leftIcon={`/images/blue-add.svg`} btnClasses={styles.linkBtn} btnContent={'New Testnet'}/>
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
          <SelectDropdown options={SORT_OPTIONS} label={'Sort by: '} handleChange={applySort}></SelectDropdown>
        </div>
      </div>
      <div className={styles.viewContent}>
        {renderTestnetCards()}
      </div>
    </>
  )
}

export default TestnetsView