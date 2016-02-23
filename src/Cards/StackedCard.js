import React, { PropTypes } from 'react';
import Card from './Card'
import Timestamp from '../Timestamp/Timestamp';
import TextBody from '../TextBody/TextBody';

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
  timestamp
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

      <div className='Climb__Media'>
        Image or video here
      </div>

      <Timestamp value={ timestamp } />

    </div>
  );
};

export default Card(StackedCard);
