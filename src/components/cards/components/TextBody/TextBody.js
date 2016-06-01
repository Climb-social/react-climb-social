import React, { PropTypes } from 'react';

const TextBody = ({ text }) => (
  <p
    className="Climb-Card__text-body"
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

TextBody.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextBody;
