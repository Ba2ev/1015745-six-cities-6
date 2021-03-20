import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {sendComment} from "../../store/api-actions";
import FormRating from '../form/form-rating/form-rating';
import FormTextArea from '../form/form-textarea/form-textarea';

const ReviewForm = () => {

  const dispatch = useDispatch();

  const {id} = useSelector((state) => state.DATA.currentOffer.data);

  const [reviewForm, setReviewForm] = useState({
    rating: ``,
    review: ``,
    isFormVaild: false
  });

  const isReviewTextInLimit = (reviewForm.review.length >= 50 && reviewForm.review.length <= 300);

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;

    const isFormValid = reviewForm.rating && isReviewTextInLimit;

    setReviewForm((prevCounter) => ({...prevCounter, [name]: value}));

    if (isFormValid) {
      setReviewForm((prevCounter) => ({...prevCounter, isFormVaild: true}));
    } else {
      setReviewForm((prevCounter) => ({...prevCounter, isFormVaild: false}));
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const {target: form} = evt;

    setReviewForm((prevCounter) => ({...prevCounter, isFormInvaild: true}));

    dispatch(sendComment({
      id,
      rating: reviewForm.rating,
      comment: reviewForm.review,
    }));

    form.reset();
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
        <button className="reviews__submit form__submit button" type="submit" disabled={!reviewForm.isFormVaild}>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
