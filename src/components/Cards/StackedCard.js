import React from 'react';
import Timestamp from '../Timestamp/Timestamp';
import TextBody from '../TextBody/TextBody';
import MediaBody from '../MediaBody/MediaBody';
import Publisher from '../Publisher/Publisher';
import {propTypes as defaultPropTypes} from './defaults';

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

StackedCard.propTypes = defaultPropTypes;

export default StackedCard;
