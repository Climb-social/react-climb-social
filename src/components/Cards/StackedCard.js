import React, { PropTypes } from 'react';
import Timestamp from '../Timestamp/Timestamp';
import TextBody from '../TextBody/TextBody';
import MediaBody from '../MediaBody/MediaBody';
import Publisher from '../Publisher/Publisher';

const StackedCard = ({
  message,
  link,
  author: {
    picture: pic,
    name,
    link: profileLink,
    username
  },
  sourceType,
  timestamp,
  image,
  videoUrl
  }) => {
  return (
    <div className={ `Climb__Card Climb__Card--Stacked Climb__Card--${sourceType}` }>

      <Publisher pic={ pic }
                 displayName={ name }
                 profileLink={ profileLink }
                 username={ username } />

      <TextBody text={ message } />

      <MediaBody image={ image }
                 videoUrl={ videoUrl } />

      <Timestamp value={ timestamp }
                 link={ link } />

    </div>
  );
};

StackedCard.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  sourceType: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  videoUrl: PropTypes.string
};

export default StackedCard;
