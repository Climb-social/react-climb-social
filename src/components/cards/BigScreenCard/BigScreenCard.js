import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import { propTypes, defaultProps } from '../cardDefaults';
import styles from './BigScreenCard.sass';

import Panel from './Panel';
import FeaturePanel from './FeaturePanel';

import MediaBody from '../components/MediaBody/MediaBody';
import StandardBody from '../components/StandardBody/StandardBody';


@css(styles)
class BigScreenCard extends React.Component {

  static propTypes = {
    ...propTypes,
    index: PropTypes.number.isRequired,
    onLeave: PropTypes.func,
  };

  static defaultProps = defaultProps;

  state = {
    handleLeave: null,
  };


  componentWillLeave(cb) {
    const { onLeave } = this.props;

    const handleLeave = () => {
      if (onLeave) onLeave();
      cb();
    };

    this.setState({ handleLeave });
  }


  get focusType() {
    const { image, videoUrl: video } = this.props;
    return (image || video) ? 'media' : 'text';
  }

  get isMediaType() {
    return this.focusType === 'media';
  }

  get media() {
    const { image, videoUrl } = this.props;
    return (
      <MediaBody image={image} videoUrl={videoUrl} alt={'Feature image'} />
    );
  }

  render() {
    const { sourceType, index } = this.props;
    const { handleLeave } = this.state;

    const body = <StandardBody {...this.props} />;

    return (
      <div
        styleName="root"
        className={`
          Climb-Card
          Climb-Card--${sourceType}
          Climb-BigScreenCard
          Climb-BigScreen--${this.focusType}
        `}
      >
        {this.isMediaType ?
          <FeaturePanel
            feature={this.media}
            reverse={index % 2 === 0}
            children={body}
            onLeave={handleLeave}
          />
        :
          <Panel
            children={body}
            onLeave={handleLeave}
          />
        }
      </div>
    );
  }
}

export default BigScreenCard;
