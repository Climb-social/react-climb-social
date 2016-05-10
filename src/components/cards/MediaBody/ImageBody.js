import React, { PropTypes } from 'react';

const ImageBody = ({url, asBackground, width, height}) => {
  if (!asBackground) {
    return (
      <img
        className='Climb__Media Climb__Media--image'
        src={url}
        width={width}
        height={height}
      />
    );
  }

  const styles = {
    backgroundImage: `url(${url})`,
    height: height ? height : undefined,
    width: width ? width : height ? '100%' : undefined,
  };

  return (
    <div
      className='Climb__Media Climb__Media--image Climb__Media--image--asBackground'
      style={ styles }
    />
  );
};

ImageBody.propTypes = {
  url: PropTypes.string.isRequired,
  asBackground: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

ImageBody.defaultProps = {
  asBackground: false,
};

export default ImageBody;
