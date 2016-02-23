import React, { PropTypes } from 'react';

const StackedCard = ({
  message,
  link,
  author: {
    picture: pic,
    name,
    link: profileLink,
    username
  },
  sourceType
  }) => {
  return (
    <div className={ `Climb__Card Climb__Card--Stacked Climb__Card--${sourceType}` }>

      <div className='Climb__Profile'>
        <img src={ pic }
             width='50'
             height='50'
             alt={`Profile picture of ${name}`} />
        <h6>
          { name }
        </h6>

        <h5>
          <a href={ profileLink }>
            @{ username }
          </a>
        </h5>
      </div>

      <div className='Climb__TextBody'>
        <a href={ link }>
          <p>{ message }</p>
        </a>
      </div>

      <div className='Climb__Media'>
        Image or video here
      </div>

    </div>
  );
};

StackedCard.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired,
  sourceType: PropTypes.string.isRequired
};

export default StackedCard;
