import React from 'react';
import PropTypes from 'prop-types';

const FormTextArea = ({handler}) => {
  return (
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handler} data-testid="textarea"></textarea>
  );
};

FormTextArea.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default FormTextArea;
