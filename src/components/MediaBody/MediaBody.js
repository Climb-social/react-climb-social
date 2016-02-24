import React, { PropTypes } from 'react';

const MediaBody = ({
  text
  }) => {
  return (
    <p className='Climb__TextBody'
       dangerouslySetInnerHTML={ createMarkup(text) } />
  )
};

MediaBody.propTypes = {
  text: PropTypes.string.isRequired
};

export default MediaBody;
