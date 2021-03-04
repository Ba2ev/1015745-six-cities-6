import React from 'react';
import PropTypes from 'prop-types';
import {bookmarkBtnTypesParams} from '../../const';

const BookmarkBtn = ({btnType, isFavorite, onButtonClick}) => {
  return (
    <button className={`${bookmarkBtnTypesParams[btnType].BTN_CLASS}__bookmark-button ${isFavorite ? `${bookmarkBtnTypesParams[btnType].BTN_CLASS}__bookmark-button--active` : ``} button`} type="button" onClick={onButtonClick}>
      <svg className={`${bookmarkBtnTypesParams[btnType].BTN_CLASS}__bookmark-icon`} width={bookmarkBtnTypesParams[btnType].ICON_WIDTH} height={bookmarkBtnTypesParams[btnType].ICON_HEIGHT}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

BookmarkBtn.propTypes = {
  btnType: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func,
};

export default BookmarkBtn;
