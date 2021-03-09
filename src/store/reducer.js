import {combineReducers} from 'redux';
import {user} from './user/user';
import {property} from './property/property';
import {places} from './places/places';

export const NameSpace = {
  PROPERTY: `PROPERTY`,
  PLACES: `PLACES`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.PROPERTY]: property,
  [NameSpace.PLACES]: places,
  [NameSpace.USER]: user,
});
