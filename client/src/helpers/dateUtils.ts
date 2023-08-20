export const getTimeAgo = (timestamp: number) => {
    const currentTime = Date.now();
    const diffInMilliseconds = currentTime - timestamp;

    // Define time units in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;

    if (diffInMilliseconds < minute) {
        return 'just now';
    } else if (diffInMilliseconds < hour) {
        const minutes = Math.floor(diffInMilliseconds / minute);
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (diffInMilliseconds < day) {
        const hours = Math.floor(diffInMilliseconds / hour);
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (diffInMilliseconds < month) {
        const days = Math.floor(diffInMilliseconds / day);
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (diffInMilliseconds < year) {
        const months = Math.floor(diffInMilliseconds / month);
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
        const years = Math.floor(diffInMilliseconds / year);
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
}