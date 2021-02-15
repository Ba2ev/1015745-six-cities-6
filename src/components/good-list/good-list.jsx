import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const GoodList = ({goods}) => {
  return (
    <Fragment>
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((good) => {
          return (
            <li key={good} className="property__inside-item">
              {good}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodList;
