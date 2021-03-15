import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {ratingStarsParams} from '../../../const';

const FormRating = ({handler}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {
        ratingStarsParams.map(({value, title}) => (
          <Fragment key = {value}>
            <input className="form__rating-input visually-hidden" name="rating" value={`${value}`} id={`${value}-stars`} type="radio" onClick={handler}/>
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))
      }
    </div>
  );
};

FormRating.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default FormRating;
