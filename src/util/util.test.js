import {getLocalizedDate, getDateTimeFormat} from '../util/util';

describe(`Display correct date format`, () => {
  it(`Return date in correct datetime format`, () => {
    expect(getDateTimeFormat(`2021-03-08T15:08:45.712Z`)).toBe(`2021-03-08`);
  });
  it(`Return date in correct visual format`, () => {
    expect(getLocalizedDate(`2021-05-08T15:08:45.712Z`)).toBe(`May 2021`);
  });
});
