import React from 'react';
import PropTypes from 'prop-types';
import {userTypes, userTypesParams} from '../../const';

const User = ({user, userType}) => {

  const {isPro, avatarUrl, name} = user;
  const isPropertyProUser = (userType === userTypes.PROPERTY) && isPro;

  return (
    <div className={`${userTypesParams[userType].MIX_CLASS || ``} user`}>

      <div className={`${userTypesParams[userType].IMAGE_WRAP_CLASS || ``} ${isPropertyProUser ? userTypesParams[userType].IMAGE_WRAP_PRO_CLASS : ``} user__avatar-wrapper`}>
        <img
          className={`${userTypesParams[userType].IMAGE_AVATAR_CLASS || ``} user__avatar`}
          src={avatarUrl}
          width={userTypesParams[userType].IMAGE_WIDTH}
          height={userTypesParams[userType].IMAGE_HEIGHT}
          alt={userTypesParams[userType].IMAGE_ALT || ``}/>
      </div>

      <span className={userTypesParams[userType].USER_NAME_CLASS || ``}>
        {name}
      </span>

      {isPropertyProUser && <span className={userTypesParams[userType].USER_STATUS_CLASS || ``}>Pro</span>}

    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  userType: PropTypes.string.isRequired
};

export default User;
