import React from 'react';
import css from 'react-css-modules';

import Timestamp from './Timestamp/Timestamp';
import TextBody from './TextBody/TextBody';
import MediaBody from './MediaBody/MediaBody';
import Publisher from './Publisher/Publisher';

import { propTypes as defaultPropTypes } from './cardDefaults';
import styles from './StackedCard.sass';

const StackedCard = ({
  message,
  link,
  author: {
    picture: pic,
    name,
    link: profileLink,
    username,
  },
  sourceType,
  timestamp,
  image,
  videoUrl,
  }) => (
  <div
    className={`Climb__Card Climb__Card--Stacked Climb__Card--${sourceType}`}
    styleName="card"
  >
    <Publisher
      pic={pic}
      displayName={name}
      profileLink={profileLink}
      username={username}
    />

    <TextBody text={message} />

    <MediaBody
      image={image}
      videoUrl={videoUrl}
    />

    <Timestamp
      value={timestamp}
      link={link}
    />

  </div>
);

StackedCard.propTypes = defaultPropTypes;

export default css(StackedCard, styles);
