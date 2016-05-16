import React, { PropTypes } from 'react';

import Publisher from '../Publisher/Publisher';
import Timestamp from '../Timestamp/Timestamp';
import TextBody from '../TextBody/TextBody';


const StandardBody = ({
  message,
  link,
  author: {
    picture: pic,
    name,
    link: profileLink,
    username,
  },
  timestamp,
}) => (
  <div styleName="root">
    <Publisher
      pic={pic}
      displayName={name}
      profileLink={profileLink}
      username={username}
    />

    <TextBody
      text={message}
    />

    <Timestamp
      value={timestamp}
      link={link}
    />
  </div>
);

StandardBody.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default StandardBody;
