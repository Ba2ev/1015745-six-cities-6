import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {user} from './user';
import {ActionType} from '../action';
import {checkAuth, login, logout} from '../api-actions';
import {requests} from '../../const';

const api = createAPI(() => {});

describe(`User reducer works correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        isAuthorized: false,
        account: ``,
      });
  });

  it(`Reducer should update authorizationStatus to 'true'`, () => {
    const state = {isAuthorized: false};

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true
    };

    expect(user(state, requiredAuthorizationAction)).toEqual({isAuthorized: true});
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /login by authorization`, () => {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    mockApi.onGet(requests.LOGIN).reply(200, [{email: `test@test.ru`}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then((email)=> {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_ACCOUNT,
          payload: email,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /login by login`, () => {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    mockApi.onPost(requests.LOGIN).reply(200, [{email: `test@test.ru`}]);

    return loginLoader(dispatch, () => {}, api)
      .then((email)=> {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: true,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_ACCOUNT,
          payload: email,
        });
      });
  });

  it(`Should make a correct API call to /logout by logout`, () => {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    mockApi.onGet(requests.LOGOUT).reply(200);

    return logoutLoader(dispatch, () => {}, api)
      .then(()=> {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_ACCOUNT,
          payload: ``,
        });
      });
  });
});
