import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import { propTypes, defaultProps } from '../cardDefaults';
import styles from './BigScreenCard.sass';

import FeatureSlide from './FeatureSlide';
import MediaBody from '../components/MediaBody/MediaBody';
import StandardBody from '../components/StandardBody/StandardBody';


class BigScreenCard extends React.Component {

  static propTypes = {
    ...propTypes,
    index: PropTypes.number.isRequired,
  };

  static defaultProps = defaultProps;


  get focusType() {
    const { image, videoUrl: video } = this.props;
    return (image || video) ? 'image' : 'text';
  }

  get isImageType() {
    return this.focusType === 'image';
  }


  get media() {
    const { image, videoUrl } = this.props;
    return (
      <MediaBody image={image} videoUrl={videoUrl} alt={'Feature image'} />
    );
  }

  render() {
    const { sourceType, index } = this.props;

    return (
      <div
        styleName="root"
        className={`
          Climb__Card
          Climb__Card--${sourceType}
          Climb__Card--bigScreen
          Climb__Card--bigScreen--${this.focusType}
        `}
      >
        {this.isImageType ?
          <FeatureSlide
            feature={this.media}
            reverse={index % 2 === 0}
            children={<StandardBody {...this.props} />}
          />
        :
          <StandardBody {...this.props} />
        }
      </div>
    );
  }

}

export default css(BigScreenCard, styles);
