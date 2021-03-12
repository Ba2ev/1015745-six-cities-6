import {user} from './user';
import {ActionType} from '../action';

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
