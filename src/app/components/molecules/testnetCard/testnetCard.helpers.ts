import {TESTNET_STATUSES} from './testnetCard.constants';

export const shouldDisableSettings = (status: keyof typeof TESTNET_STATUSES) => {
  return status === TESTNET_STATUSES.UPDATING
    || status === TESTNET_STATUSES.CLONING
    || status === TESTNET_STATUSES.PENDING;
}

export const getAllBlockchains = (list: any) => {
  return list.map((item: any) => item.chain);
}

export const getUpdatingOffChainCount = (list: any) => {
  let count = 0;

  list.forEach((item: any) => {
    if (item.status === TESTNET_STATUSES.UPDATING) {
      count++;
    }
  })

  return count;
}

export const getTimeSince = (pastTimeStamp: any) =>{
  const pastDate: any = new Date(pastTimeStamp)
  const currentTime: any = new Date();
  const seconds: number = Math.floor((currentTime - pastDate) / 1000);
  const years = Math.floor(seconds / (3600 * 24 * 365));
  const months = Math.floor(seconds / (3600 * 24 * 30));
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60);

  switch(true) {
    case days > 581:
      return `${years} years ago`;
    case days >= 331 && days <= 580:
      return 'a year ago';
    case days >= 59 && days <= 330:
      return `${months} months ago`;
    case days >= 28 && days <= 58:
      return 'a month ago';
    case hours >= 43 && days <= 25:
      return `${days} days ago`;
    case hours >= 24 && hours <= 42:
      return 'a day ago';
    case minutes >= 90 && hours <= 23:
      return `${hours} hours ago`;
    case minutes >= 60 && minutes <= 89:
      return 'an hour ago';
    case seconds >= 120 && minutes <= 59:
      return `${minutes} minutes ago`;
    case seconds >= 60 && seconds <= 119:
      return 'a minute ago';
    default:
      return 'a few seconds ago';
  }
}