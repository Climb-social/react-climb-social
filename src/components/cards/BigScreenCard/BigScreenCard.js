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
    const { handleLeave } = this.state;

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
          <FeaturePanel
            feature={this.media}
            reverse={index % 2 === 0}
            children={<StandardBody {...this.props} />}
            onLeave={handleLeave}
          />
        :
          <Panel
            children={<StandardBody {...this.props} />}
            onLeave={handleLeave}
          />
        }
      </div>
    );
  }
}

export default BigScreenCard;
