import React, { Component } from 'react';

import { propTypes } from '../cardDefaults';

import Timestamp from '../components/Timestamp/Timestamp';
import TextBody from '../components/TextBody/TextBody';
import MediaBody from '../components/MediaBody/MediaBody';
import Publisher from '../components/Publisher/Publisher';


class FocusCard extends Component {

  static propTypes = propTypes;

  getFocusType() {
    const { image, videoUrl: video } = this.props;
    return (image || video) ? 'image' : 'text';
  }

  isImageType() {
    return this.getFocusType() === 'image';
  }

  renderMedia() {
    const { image, videoUrl } = this.props;
    return (
      <div>
        <MediaBody image={image} videoUrl={videoUrl} />
      </div>
    );
  }

  renderText() {
    const { author, message, timestamp, link } = this.props;
    return (
      <div>
        <Publisher
          pic={author.picture}
          displayName={author.name}
          profileLink={author.link}
          username={author.username}
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
  }

  render() {
    const { sourceType } = this.props;

    return (
      <div
        className={`
          Climb-Card
          Climb-Card--${sourceType}
          Climb-FocusCard
          Climb-FocusCard--${this.getFocusType()}
        `}
      >
        <div className="Climb-FocusCard__alpha">
          {this.isImageType() ? this.renderMedia() : this.renderText()}
        </div>

        {this.isImageType() ?
          <div className="Climb-FocusCard__beta">
            {this.renderText()}
          </div>
        : null}
      </div>
    );
  }

}

export default FocusCard;
