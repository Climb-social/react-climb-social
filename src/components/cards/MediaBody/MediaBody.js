import React, { PropTypes } from 'react';
import ImageBody from './ImageBody';
import VideoBody from './VideoBody';

const MediaBody = ({
  image,
  videoUrl,
  }) => {
  if (videoUrl) {
    return (
      <VideoBody url={videoUrl} />
    );
  }

  if (image) {
    return (
      <ImageBody {...image} />
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
};

export default MediaBody;
