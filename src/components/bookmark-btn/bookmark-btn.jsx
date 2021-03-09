import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {redirectToRoute} from '../../store/action';
import {changeFavorite} from '../../store/api-actions';
import {bookmarkBtnTypesParams, routes} from '../../const';

const BookmarkBtn = ({btnType, id, isFavorite}) => {

  const dispatch = useDispatch();

  const {isAuthorized} = useSelector((state) => state.USER);

  const handleClick = () => {
    if (!isAuthorized) {
      dispatch(redirectToRoute(routes.LOGIN));
    } else {
      dispatch(changeFavorite({
        id,
        status: Number(!isFavorite)
      }));
    }
  };

  return (
    <button className={`${bookmarkBtnTypesParams[btnType].BTN_CLASS}__bookmark-button ${isFavorite ? `${bookmarkBtnTypesParams[btnType].BTN_CLASS}__bookmark-button--active` : ``} button`} type="button" onClick={handleClick}>
      <svg className={`${bookmarkBtnTypesParams[btnType].BTN_CLASS}__bookmark-icon`} width={bookmarkBtnTypesParams[btnType].ICON_WIDTH} height={bookmarkBtnTypesParams[btnType].ICON_HEIGHT}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

BookmarkBtn.propTypes = {
  btnType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default BookmarkBtn;
