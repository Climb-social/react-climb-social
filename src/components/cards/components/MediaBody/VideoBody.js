import React, { PropTypes } from 'react';

const VideoBody = ({ url }) => (
  <div className="Climb-Card__media Climb-Card__media--video">
    <video width="100%" controls>
      <source src={url} type="video/mp4" />
    </video>
  </div>
);

VideoBody.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoBody;
