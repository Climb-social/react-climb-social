import React, { PropTypes } from 'react';

const ImageBody = ({
  url,
  width,
  height
  }) => {
  return (
    <div className='Climb__Image'>
      <img src={ url }
           width={ width }
           height={ height}
           alt="" />
    </div>
  );
};

ImageBody.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default ImageBody;
