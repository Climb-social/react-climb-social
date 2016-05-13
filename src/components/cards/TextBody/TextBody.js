import React, { PropTypes } from 'react';

const TextBody = ({ text }) => (
  <p
    className="Climb__TextBody"
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

TextBody.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextBody;
