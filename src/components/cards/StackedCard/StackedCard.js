import React from 'react';
import css from 'react-css-modules';

import { propTypes } from '../cardDefaults';
import styles from './StackedCard.sass';

import Timestamp from '../components/Timestamp/Timestamp';
import TextBody from '../components/TextBody/TextBody';
import MediaBody from '../components/MediaBody/MediaBody';
import Publisher from '../components/Publisher/Publisher';


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
    className={`
      Climb-Card
      Climb-Card--${sourceType}
      Climb-StackedCard
    `}
    styleName="root"
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

StackedCard.propTypes = propTypes;

export default css(StackedCard, styles);
