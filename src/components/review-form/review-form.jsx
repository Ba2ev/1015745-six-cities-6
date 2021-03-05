import React, {useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {sendComment} from "../../store/api-actions";
import FormRating from '../form/form-rating/form-rating';
import FormTextArea from '../form/form-textarea/form-textarea';

const ReviewForm = ({id, onSubmit}) => {

  const [reviewForm, setReviewForm] = useState({
    rating: ``,
    review: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const {target: form} = evt;

    onSubmit({
      id,
      rating: reviewForm.rating,
      comment: reviewForm.review,
    });

    form.reset();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm((prevCounter) => ({...prevCounter, [name]: value}));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormRating handler={handleFieldChange}/>
      <FormTextArea handler={handleFieldChange}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.number,
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = ({currentOffer}) => ({
  id: currentOffer.data.id,
});


const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    dispatch(sendComment(commentData));
  }
});


export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
