import { testnetStatus, testnetsType } from '../fetchTestnetsData';
import Status from '../components/Card/Status';

type FilterByStatus = {
  data: testnetsType[] | null;
  status: string;
};

export const filterByOptions = [
  { label: <Status status={'ALL'} />, id: 'ALL' },
  {
    label: <Status status={testnetStatus.RUNNING} />,
    id: testnetStatus.RUNNING
  },
  {
    label: <Status status={testnetStatus.STANDING_UP} />,
    id: testnetStatus.STANDING_UP
  },
  {
    label: <Status status={testnetStatus.UPDATING} />,
    id: testnetStatus.UPDATING
  },
  { label: <Status status={testnetStatus.FAILED} />, id: testnetStatus.FAILED },
  { label: <Status status={testnetStatus.KILLED} />, id: testnetStatus.KILLED }
];

const filterByStatus = ({ data, status }: FilterByStatus): testnetsType[] | null => {
  if (data) {
    if (status === 'ALL') return data;
    return data?.filter((item) => item.status === status);
  }
  return null;
};

export default filterByStatus;
