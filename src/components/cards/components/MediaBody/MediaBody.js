import React, { PropTypes } from 'react';
import ImageBody from './ImageBody';
import VideoBody from './VideoBody';

const MediaBody = ({
  image,
  videoUrl,
  alt,
}) => {
  if (videoUrl) {
    return (
      <VideoBody url={videoUrl} alt={alt} />
    );
  }

  if (image) {
    return (
      <ImageBody {...image} alt={alt} />
    );
  }

  return <span>No Media</span>;
};

MediaBody.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  videoUrl: PropTypes.string,
  alt: PropTypes.string,
};

export default MediaBody;
