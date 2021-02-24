import dayjs from 'dayjs';
import {offers} from './mock';

export const getDateTimeFormat = (date) => {
  return dayjs(date).format(`YYYY-MM-DD`);
};

export const getLocalizedDate = (date) => {
  return dayjs(date).format(`YYYY-MM`);
};

export const getCityOffers = (city) => {
  return offers.filter(({city: {name}}) => name === city);
};
