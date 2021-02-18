import dayjs from 'dayjs';

export const getDateTimeFormat = (date) => {
  return dayjs(date).format(`YYYY-MM-DD`);
};

export const getLocalizedDate = (date) => {
  return dayjs(date).format(`YYYY-MM`);
};
