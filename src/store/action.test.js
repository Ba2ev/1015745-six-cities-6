import {ActionType, updateCity, updateSort, updateHoveredOfferId, loadOffers, loadFavoritesOffer, loadOfferData, loadOfferComments, loadOfferNearby, updateOfferFavorite, requireAuthorization, updateAccount, redirectToRoute} from './action';
import {sortTypes} from '../const';
describe(`Actions work correctly`, () => {

  it(`Action creator for update current city returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_CITY,
      payload: `Paris`,
    };

    expect(updateCity(`Paris`)).toEqual(expectedAction);
  });

  it(`Action creator for update current sorting type returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_SORT,
      payload: sortTypes.RATING,
    };

    expect(updateSort(sortTypes.RATING)).toEqual(expectedAction);
  });

  it(`Action creator for update id of current hovered offer returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_HOVERED_PLACE_ID,
      payload: 1,
    };

    expect(updateHoveredOfferId(1)).toEqual(expectedAction);
  });

  it(`Action creator for loading offers returns correct action`, () => {
    const offers = [
      {
        id: 1,
        price: 300,
        rating: 5,
      },
      {
        id: 2,
        price: 400,
        rating: 4
      },
      {
        id: 3,
        price: 300,
        rating: 4
      },
      {
        id: 4,
        price: 500,
        rating: 3
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_PLACES,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it(`Action creator for loading favorite offers returns correct action`, () => {
    const favoriteOffers = [
      {
        id: 1,
        price: 300,
        isFavorite: true,
      },
      {
        id: 2,
        price: 400,
        isFavorite: true,
      },
      {
        id: 3,
        price: 300,
        isFavorite: true,
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITES_OFFERS,
      payload: favoriteOffers,
    };

    expect(loadFavoritesOffer(favoriteOffers)).toEqual(expectedAction);
  });

  it(`Action creator for loading property's data returns correct action`, () => {
    const offers = [
      {
        id: 1,
        price: 300,
        isFavorite: true,
      },
      {
        id: 2,
        price: 400,
        isFavorite: true,
      },
      {
        id: 3,
        price: 300,
        isFavorite: true,
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_PROPERTY_DATA,
      payload: offers,
    };

    expect(loadOfferData(offers)).toEqual(expectedAction);
  });

  it(`Action creator for loading property's comments returns correct action`, () => {
    const comments = [
      {
        id: 1,
        price: 300,
        isFavorite: true,
      },
      {
        id: 2,
        price: 400,
        isFavorite: true,
      },
      {
        id: 3,
        price: 300,
        isFavorite: true,
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_PROPERTY_COMMENTS,
      payload: comments,
    };

    expect(loadOfferComments(comments)).toEqual(expectedAction);
  });

  it(`Action creator for loading property's nearbly returns correct action`, () => {
    const nearOffers = [
      {
        id: 1,
        price: 300,
        isFavorite: true,
      },
      {
        id: 2,
        price: 400,
        isFavorite: true,
      },
      {
        id: 3,
        price: 300,
        isFavorite: true,
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_PROPERTY_NEARBY,
      payload: nearOffers,
    };

    expect(loadOfferNearby(nearOffers)).toEqual(expectedAction);
  });

  it(`Action creator for update offer favorite returns correct action`, () => {
    const offerData = {
      id: 3,
      price: 300,
      isFavorite: true,
    };

    const expectedAction = {
      type: ActionType.UPDATE_OFFER_FAVORITE,
      payload: offerData,
    };

    expect(updateOfferFavorite(offerData)).toEqual(expectedAction);
  });

  it(`Action creator for update require autorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true,
    };

    expect(requireAuthorization(true)).toEqual(expectedAction);
  });

  it(`Action creator for update current user's account returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_ACCOUNT,
      payload: `user@mail.ru`,
    };

    expect(updateAccount(`user@mail.ru`)).toEqual(expectedAction);
  });

  it(`Action creator for redirect returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`,
    };

    expect(redirectToRoute(`/`)).toEqual(expectedAction);
  });
});
