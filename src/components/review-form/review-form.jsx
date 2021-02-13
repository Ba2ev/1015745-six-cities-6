import React, {useState} from 'react';
import FormRating from '../form/form-rating/form-rating';
import FormTextArea from '../form/form-textarea/form-textarea';

const ReviewForm = () => {
  const [reviewForm, setReviewForm] = useState({
    rating: ``,
    review: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm((prevCounter) => ({...prevCounter, [name]: value}));
  };

  const {rating, review} = reviewForm;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <div style={{color: `red`}}>{`Установлен рейтинг: ${rating ? rating : `*`}, текст комментария: ${review ? review : `*`}`}</div>
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

export default ReviewForm;
