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
    <div className='Climb__Image'
         style={ styles } />
  );
};

ImageBody.propTypes = {
  url: PropTypes.string.isRequired
};

export default ImageBody;
