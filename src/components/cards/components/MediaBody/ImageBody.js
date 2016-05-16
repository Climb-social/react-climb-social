import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './ImageBody.sass';


const ImageBody = ({ url, asBackground, width, height, alt }) => {
  if (!asBackground) {
    return (
      <img
        styleName="image"
        className="Climb__Media Climb__Media--image"
        src={url}
        width={width}
        height={height}
        alt={alt}
      />
    );
  }

  const inlineStyles = {
    backgroundImage: `url(${url})`,
    height,
    width: width || (height ? '100%' : undefined),
  };

  return (
    <div
      styleName="background"
      className="Climb__Media Climb__Media--image Climb__Media--image--asBackground"
      style={inlineStyles}
      alt={alt}
    />
  );
};

ImageBody.propTypes = {
  url: PropTypes.string.isRequired,
  asBackground: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string.isRequired,
};

ImageBody.defaultProps = {
  asBackground: false,
};


export default css(ImageBody, styles);
