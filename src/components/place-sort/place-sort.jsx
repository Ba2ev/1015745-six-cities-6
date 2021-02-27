import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {sortTypes} from '../../const';

const PlaceSort = ({currentSort, isSortOpened, updateSort, toggleSortList}) => {

  const handleListClick = () => {
    toggleSortList();
  };

  const handleSortTypeClick = (evt) => {
    const {textContent} = evt.target;
    updateSort(textContent);
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
      <ul className={`places__options places__options--custom ${isSortOpened ? `places__options--opened` : ``}`}>
        {Object.values(sortTypes).map((type) => (
          <li key={type} className={`places__option ${currentSort === type ? `places__option--active` : ``}`} tabIndex="0" onClick={handleSortTypeClick}>{type}</li>
        ))}
      </ul>
    </form>
  );
};

PlaceSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  isSortOpened: PropTypes.bool.isRequired,
  updateSort: PropTypes.func.isRequired,
  toggleSortList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
  isSortOpened: state.isSortOpened,
});

const mapDispatchToProps = (dispatch) => ({
  updateSort(currentSort) {
    dispatch(ActionCreator.updateSort(currentSort));
    dispatch(ActionCreator.toggleSortList());
  },
  toggleSortList() {
    dispatch(ActionCreator.toggleSortList());
  }
});

export {PlaceSort};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSort);
