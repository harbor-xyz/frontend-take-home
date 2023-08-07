'use client';

import {useEffect, useCallback, useState, useMemo} from 'react';

import TestnetCard from '@/components/molecules/testnetCard';
import Button, {BUTTON_SIZE} from '@/components/atoms/button';
import AddIcon from '@/components/icons/add';
import Select from '@/components/atoms/select';
import Dot from '@/components/atoms/dot';

import {
  getFilterOptions,
  getResults,
} from './testnets.helpers';

import {SORT_OPTIONS} from './testnets.contants';

import styles from './testnets.module.scss';

export default function Testnets({data}: any) {
  const [results, setResults] = useState<any[]>(data);
  const filterOptions = useMemo(()=> {
    return getFilterOptions(data);
  }, [data]);
  const [selectedFilter, setSelectedFilter] = useState<any>('');
  const [selectedSort, setSelectedSort] = useState<any>('');

  useEffect(() => {
    const finalResults = getResults(data, selectedFilter, selectedSort);
    setResults([...finalResults]);
  }, [data, selectedFilter, selectedSort]);

  useEffect(() => {
    setSelectedFilter(filterOptions[0].value);
    setSelectedSort(SORT_OPTIONS[0].value);
  }, [data, filterOptions]);

  const applyFilter = useCallback((filterKey: string) => {
    setSelectedFilter(filterKey);
  }, [setSelectedFilter]);

  const applySort = useCallback((sortKey: string) => {
    setSelectedSort(sortKey);
  }, [setSelectedSort]);

  const renderSelectedFilter = useCallback((selectedOption: any)=>{
    if (selectedOption) {
      const {label, Icon, color} = selectedOption;

      return <Button BeforeIcon={Icon} color={color} size={BUTTON_SIZE.Small}>{label}</Button>
    }
  }, []);

  const renderFilterOption = useCallback((option: any, _: any, onChange: any, classNames: any)=>{
    
      const {count, label, Icon, color, value} = option;

      return <li key={value} className={classNames} onClick={onChange(value)}>
        <Button BeforeIcon={Icon} color={color} size={BUTTON_SIZE.Small}>{label} ({count})</Button>
      </li>
  }, []);

  return <div className={styles.testnetsContainer}>
    <div className={styles.headerSection}>
      <h2 className={styles.title}>Testnets ({results.length})</h2>
      <Button
        size={BUTTON_SIZE.Medium}
        BeforeIcon={AddIcon}
      >
        New Testnet
      </Button>

      <Select
        options={filterOptions}
        label={'Filter by: '}
        onChange={applyFilter}
        className={styles.leftAuto}
        value={selectedFilter}
        renderSelectedValue={renderSelectedFilter}
        renderOption={renderFilterOption}
      />
      <Dot />
      <Select
        options={SORT_OPTIONS}
        label={'Sort by: '}
        onChange={applySort}
        value={selectedSort}
      />
    </div>
    {
      results.map((item: any) => {
        return (<TestnetCard
          key={item.id}
          data={item}
        />);
      })
    }
  </div>
}