import styled from '@emotion/styled';
import Text from '../../../ui/Text';
import Button from '../../../ui/Button';
import PlusIcon from '../../../icons/PlusIcon';
import { useTheme } from '@emotion/react';
import Dot from '../../../components/Dot';
import Dropdown, { Option } from '../../../ui/Dropdown';
import { sortByOptions } from '../../utils/sortBy';
import { filterByOptions } from '../../utils/filterByStatus';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1 0 0;
`;

const RightPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface HeaderProps {
  count: number;
  filterDataByStatus: (status: string) => void;
  sortData: (sortType: string) => void;
}

const Header = ({ count, filterDataByStatus, sortData }: HeaderProps) => {
  const theme = useTheme();
  const handleOnClickFilterByOption = (option: Option) => {
    filterDataByStatus(option.id);
  };
  const handleOnClickSortByOption = (option: Option) => {
    sortData(option.id);
  };

  return (
    <Container>
      <LeftPanel>
        <Text variant="bold">{`Testnets (${count})`}</Text>
        <Button variant="text" bold="semiBold" color={theme.color.blue} startIcon={<PlusIcon />}>
          New Testnet
        </Button>
      </LeftPanel>
      <RightPanel>
        <Dropdown
          options={filterByOptions}
          label="Filter by:"
          selectedOption={filterByOptions[0]}
          onClickOption={handleOnClickFilterByOption}
        />
        <Dot />
        <Dropdown
          options={sortByOptions}
          label="Sort by:"
          selectedOption={sortByOptions[2]}
          onClickOption={handleOnClickSortByOption}
        />
      </RightPanel>
    </Container>
  );
};

export default Header;
