import React, { PropTypes } from 'react';
import Timestamp from '../Timestamp/Timestamp';
import TextBody from '../TextBody/TextBody';
import MediaBody from '../MediaBody/MediaBody';

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

      <div className='Climb__Profile'>
        <img src={ pic }
             width='50'
             height='50'
             alt={`Profile picture of ${name}`} />
        <h6 className='Climb__Profile__name'>
          { name }
        </h6>

        <h5 className='Climb__Profile__username'>
          <a href={ profileLink }>
            @{ username }
          </a>
        </h5>
      </div>

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
