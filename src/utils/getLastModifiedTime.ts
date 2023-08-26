import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getLastModifiedTime = (time: string): string => {
  return dayjs(time).fromNow();
};
