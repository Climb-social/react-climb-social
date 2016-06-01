import React, { PropTypes } from 'react';

const Publisher = ({ pic, displayName, username, profileLink }) => (
  <div className="Climb-Card__publisher">
    <img
      src={pic}
      className="Climb-Card__publisher__image"
      width="50"
      height="50"
      alt={`${displayName}’s profile`}
    />
    <h6 className="Climb-Card__publisher__display-name">
      {displayName}
    </h6>

    <h5 className="Climb-Card__publisher__username">
      <a href={profileLink}>
        @{username}
      </a>
    </h5>
  </div>
);

Publisher.propTypes = {
  pic: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
};

export default Publisher;
