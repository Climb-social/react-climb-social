import React, { Component } from 'react';
import Timestamp from './Timestamp/Timestamp';
import TextBody from './TextBody/TextBody';
import MediaBody from './MediaBody/MediaBody';
import Publisher from './Publisher/Publisher';
import { propTypes, defaultProps } from './cardDefaults';


class BigScreenCard extends Component {

  static propTypes = propTypes;

  static defaultProps = defaultProps;


  getFocusType() {
    const { image, videoUrl: video } = this.props;
    return (image || video) ? 'image' : 'text';
  }

  isImageType() {
    return this.getFocusType() === 'image';
  }


  renderImage() {
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
          Climb__Card
          Climb__Card--${sourceType}
          Climb__Card--bigScreen
          Climb__Card--bigScreen--${this.getFocusType()}
        `}
      >
        <div className="Climb__Card--bigScreen__alpha">
          {this.isImageType() ? this.renderImage() : this.renderText()}
        </div>

        {this.isImageType() ?
          <div className="Climb__Card--bigScreen__beta">
            {this.renderText()}
          </div>
        : null}
      </div>
    );
  }

}

export default BigScreenCard;
