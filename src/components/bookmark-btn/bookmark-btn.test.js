import React from "react";
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import BookmarkBtn from './bookmark-btn';
import {bookmarkBtnTypes} from '../../const';
import {NameSpace} from '../../store/reducer';

const fakeFavoriteOffer = {
  "city": {
    "name": `Paris`,
    "location": {
      "latitude": 48.85661,
      "longitude": 2.351499,
      "zoom": 13
    }
  },
  "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
  "images": [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`
  ],
  "title": `The house among olive `,
  "isFavorite": true,
  "isPremium": true,
  "rating": 3,
  "type": `room`,
  "bedrooms": 1,
  "maxAdults": 1,
  "price": 169,
  "goods": [
    `Breakfast`,
    `Air conditioning`,
    `Laptop friendly workspace`,
    `Washer`
  ],
  "host": {
    "id": 25,
    "name": `Angelina`,
    "isPro": true,
    "avatarUrl": `img/avatar-angelina.jpg`
  },
  "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
  "location": {
    "latitude": 48.83861,
    "longitude": 2.350499,
    "zoom": 16
  },
  "id": 1
};

const fakeUnfavoriteOffer = {
  "city": {
    "name": `Brussels`,
    "location": {
      "latitude": 50.846557,
      "longitude": 4.351697,
      "zoom": 13
    }
  },
  "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
  "images": [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`
  ],
  "title": `Waterfront with extraordinary view`,
  "isFavorite": false,
  "isPremium": false,
  "rating": 4.8,
  "type": `apartment`,
  "bedrooms": 5,
  "maxAdults": 6,
  "price": 310,
  "goods": [
    `Dishwasher`,
    `Towels`,
    `Washer`,
    `Breakfast`,
    `Baby seat`,
    `Air conditioning`,
    `Fridge`,
    `Laptop friendly workspace`,
    `Coffee machine`
  ],
  "host": {
    "id": 25,
    "name": `Angelina`,
    "isPro": true,
    "avatarUrl": `img/avatar-angelina.jpg`
  },
  "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
  "location": {
    "latitude": 50.844556999999995,
    "longitude": 4.346697,
    "zoom": 16
  },
  "id": 2
};

const mockStore = configureStore({});
const initialState = {[NameSpace.USER]: {isAuthorized: true}};
jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);
describe(`BookmarkBtn should render correctly`, () => {

  it(`BookmarkBtn should render correctly when card is favorite`, () => {

    const {getByText} = render(
        <redux.Provider store={mockStore(initialState)}>
          <BookmarkBtn btnType={bookmarkBtnTypes.PLACES} id={fakeFavoriteOffer.id} isFavorite={fakeFavoriteOffer.isFavorite}/>
        </redux.Provider>
    );

    const buttonFavorite = getByText(`In bookmarks`);

    expect(buttonFavorite).toBeInTheDocument();
  });

  it(`BookmarkBtn should render correctly when card is unfavorite`, () => {

    const {getByText} = render(
        <redux.Provider store={mockStore(initialState)}>
          <BookmarkBtn btnType={bookmarkBtnTypes.PLACES} id={fakeUnfavoriteOffer.id} isFavorite={fakeUnfavoriteOffer.isFavorite}/>
        </redux.Provider>
    );

    const buttonUnfavorite = getByText(`To bookmarks`);

    expect(buttonUnfavorite).toBeInTheDocument();
  });
});

describe(`BookmarkBtn should render snapshot correctly`, () => {

  it(`BookmarkBtn should render snapshot correctly when card is favorite`, () => {

    const {container} = render(
        <redux.Provider store={mockStore(initialState)}>
          <BookmarkBtn btnType={bookmarkBtnTypes.PLACES} id={fakeFavoriteOffer.id} isFavorite={fakeFavoriteOffer.isFavorite}/>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`BookmarkBtn should render snapshot correctly when card is unfavorite`, () => {

    const {container} = render(
        <redux.Provider store={mockStore(initialState)}>
          <BookmarkBtn btnType={bookmarkBtnTypes.PLACES} id={fakeUnfavoriteOffer.id} isFavorite={fakeUnfavoriteOffer.isFavorite}/>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
