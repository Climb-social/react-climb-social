import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import css from 'react-css-modules';

import styles from './FeaturePanel.sass';


const featureStyleStates = {
  initial: {
    opacity: spring(0.1),
    width: spring(100),
  },
  feature: {
    opacity: spring(1),
    width: spring(100),
  },
  show: {
    opacity: spring(1),
    width: spring(50),
  },
  hide: {
    opacity: spring(0),
    width: spring(50),
  },
};

const bodyStyleStates = {
  initial: {
    opacity: spring(0),
    left: spring(20),
  },
  show: {
    opacity: spring(1),
    left: spring(0),
  },
  hide: {
    opacity: spring(0),
    left: spring(0),
  },
};


@css(styles)
export default class FeaturePanel extends React.Component {
  static propTypes = {
    feature: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool.isRequired,
    onLeave: PropTypes.func,
  };

  static defaultProps = {
    reverse: false,
  };

  state = {
    featureStyle: featureStyleStates.initial,
    bodyStyle: bodyStyleStates.initial,
    isLeaving: false,
  };

  componentDidMount() {
    this.transitionIn();
  }

  componentWillUpdate({ onLeave: nextOnLeave }) {
    const { onLeave: currentOnLeave } = this.props;
    if (!currentOnLeave && nextOnLeave) this.transitionOut();
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTimeout);
  }


  transitionTimeout = null;

  transitionIn() {
    this.transitionToFeature();
    this.transitionTimeout = setTimeout(() => this.transitionToMain(), 1000);
  }

  transitionOut() {
    this.setState({ isLeaving: true });
    this.transitionToNone();
  }

  transitionToFeature() {
    this.setState({
      featureStyle: featureStyleStates.feature,
      bodyStyle: bodyStyleStates.initial,
    });
  }

  transitionToMain() {
    this.setState({
      featureStyle: featureStyleStates.show,
      bodyStyle: bodyStyleStates.show,
    });
  }

  transitionToNone() {
    this.setState({
      featureStyle: featureStyleStates.hide,
      bodyStyle: bodyStyleStates.hide,
    });
  }


  handleRest() {
    const { onLeave } = this.props;
    const { isLeaving } = this.state;
    if (isLeaving && onLeave) onLeave();
  }


  render() {
    const { feature, children, reverse } = this.props;
    const { featureStyle, bodyStyle } = this.state;

    return (
      <div styleName="root">

        <Motion
          style={featureStyle}
          onRest={() => this.handleRest()}
        >{({ width, ...otherStyles }) =>
          <div
            className={styles[`feature-${reverse ? 'right' : 'left'}`]}
            style={{
              width: `${width}%`,
              ...otherStyles,
            }}
            children={feature}
          />
        }</Motion>

        <Motion
          style={bodyStyle}
        >{({ left, ...otherStyles }) =>
          <div
            className={styles[`body-${reverse ? 'left' : 'right'}`]}
            style={{
              left: !reverse ? 'auto' : `${left}%`,
              right: reverse ? 'auto' : `${left}%`,
              ...otherStyles,
            }}
            children={children}
          />
        }</Motion>
      </div>
    );
  }
}
