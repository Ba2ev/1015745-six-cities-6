import React from 'react';
import {render} from '@testing-library/react';
import User from '../user';
import {userTypes} from '../../const';

const fakeUser = {
  "id": 15,
  "isPro": false,
  "name": `Kendall`,
  "avatarUrl": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`
};
describe(`User render correctly`, () => {
  it(`User should render simple user correctly with review type`, () => {

    const {queryByText} = render(<User user={fakeUser} userType={userTypes.REVIEW}/>);

    const userNameArea = queryByText(`Kendall`);
    const proLabel = queryByText(`Pro`);

    expect(userNameArea).toBeInTheDocument();
    expect(proLabel).not.toBeInTheDocument();
  });

  it(`User should render simple user correctly with property type`, () => {

    const {queryByText} = render(<User user={fakeUser} userType={userTypes.PROPERTY}/>);

    const userNameArea = queryByText(`Kendall`);
    const proLabel = queryByText(`Pro`);

    expect(userNameArea).toBeInTheDocument();
    expect(proLabel).not.toBeInTheDocument();
  });

  it(`User should render pro user correctly with property type`, () => {

    const fakeProUser = {
      "id": 18,
      "isPro": true,
      "name": `Sophie`,
      "avatarUrl": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`
    };

    const {queryByText} = render(<User user={fakeProUser} userType={userTypes.PROPERTY}/>);

    const userNameArea = queryByText(`Sophie`);
    const proLabel = queryByText(`Pro`);

    expect(userNameArea).toBeInTheDocument();
    expect(proLabel).toBeInTheDocument();
  });
});

describe(`User render snapshots correctly`, () => {
  it(`User should render snapshot simple user correctly with review type`, () => {

    const {container} = render(<User user={fakeUser} userType={userTypes.REVIEW}/>);

    expect(container).toMatchSnapshot();
  });

  it(`User should render simple user correctly with property type`, () => {

    const {container} = render(<User user={fakeUser} userType={userTypes.PROPERTY}/>);

    expect(container).toMatchSnapshot();
  });

  it(`User should render snapshot pro user correctly with property type`, () => {

    const fakeProUser = {
      "id": 18,
      "isPro": true,
      "name": `Sophie`,
      "avatarUrl": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`
    };

    const {container} = render(<User user={fakeProUser} userType={userTypes.PROPERTY}/>);

    expect(container).toMatchSnapshot();
  });
});
