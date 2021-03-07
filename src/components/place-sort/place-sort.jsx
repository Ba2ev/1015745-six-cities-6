import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {updateSort} from '../../store/action';
import {sortTypes} from '../../const';

const PlaceSort = ({currentSort, onUpdateSort}) => {

  const [sortList, setSortList] = useState({
    isOpened: false,
  });

  const handleListClick = () => {
    setSortList((prevState) => ({...prevState, isOpened: !sortList.isOpened}));
  };

  const handleSortTypeClick = (evt) => {
    const {textContent} = evt.target;
    onUpdateSort(textContent);
    setSortList((prevState) => ({...prevState, isOpened: false}));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleListClick}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortList.isOpened ? `places__options--opened` : ``}`}>
        {Object.values(sortTypes).map((type) => (
          <li key={type} className={`places__option ${currentSort === type ? `places__option--active` : ``}`} tabIndex="0" onClick={handleSortTypeClick}>{type}</li>
        ))}
      </ul>
    </form>
  );
};

PlaceSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onUpdateSort: PropTypes.func.isRequired,
};

const mapStateToProps = ({PLACES}) => ({
  currentSort: PLACES.currentSort
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateSort(currentSort) {
    dispatch(updateSort(currentSort));
  },
});

export {PlaceSort};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSort);
