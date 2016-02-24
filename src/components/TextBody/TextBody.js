import React, { PropTypes } from 'react';


const createMarkup = (text) => {
  return {__html: text};
};

const TextBody = ({
  text
  }) => {
  return (
    <p className='Climb__TextBody'
       dangerouslySetInnerHTML={ createMarkup(text) } />
  )
};

TextBody.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextBody;
