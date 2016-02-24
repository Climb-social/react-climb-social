import React, { PropTypes } from 'react';

const ImageBody = ({
  url,
  height
  }) => {
  const styles = {
    height,
    backgroundImage: `url(${url})`
  };

  return (
    <div className='Climb__Media Climb__Media--image'
         style={ styles }>
    </div>
  );
};

ImageBody.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.number
};

export default ImageBody;
