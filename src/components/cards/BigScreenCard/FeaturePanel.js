import React, { PropTypes } from 'react';
import { Motion, spring, presets as motionPresets } from 'react-motion';
import css from 'react-css-modules';
import reduce from 'lodash.reduce';

import styles from './FeaturePanel.sass';


const elementStyleStates = {
  feature: {
    initial: {
      opacity: 0.1,
      width: 100,
    },
    feature: {
      opacity: 1,
      width: 100,
    },
    show: {
      opacity: 1,
      width: 50,
    },
    hide: {
      opacity: 0,
      width: 50,
    },
  },
  body: {
    initial: {
      opacity: 0,
      left: 20,
    },
    show: {
      opacity: 1,
      left: 0,
    },
    hide: {
      opacity: 0,
      left: 0,
    },
  },
};


@css(styles)
export default class FeaturePanel extends React.Component {
  static propTypes = {
    feature: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool.isRequired,
    onLeave: PropTypes.func,
    spring: PropTypes.shape({
      stiffness: PropTypes.number.isRequired,
      damping: PropTypes.number.isRequired,
    }),
  };

  static defaultProps = {
    reverse: false,
    spring: motionPresets.gentle,
  };

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      featureStyle: this.getCalculatedStyleState('feature', 'initial'),
      bodyStyle: this.getCalculatedStyleState('body', 'initial'),
    };
  }

  state = {
    isLeaving: false,
    featureStyle: null,
    bodyStyle: null,
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


  getCalculatedStyleState(element, frame, springOptions = this.props.spring) {
    const frameStyles = elementStyleStates[element][frame];
    return reduce(
      frameStyles,
      (result, value, key) => ({ ...result, ...{ [key]: spring(value, springOptions) } }),
      {});
  }


  transitionTimeout = null;

  transitionToFeature() {
    this.setState({
      featureStyle: this.getCalculatedStyleState('feature', 'feature'),
      bodyStyle: this.getCalculatedStyleState('body', 'initial'),
    });
  }

  transitionToMain() {
    this.setState({
      featureStyle: this.getCalculatedStyleState('feature', 'show'),
      bodyStyle: this.getCalculatedStyleState('body', 'show'),
    });
  }

  transitionToNone() {
    this.setState({
      featureStyle: this.getCalculatedStyleState('feature', 'hide'),
      bodyStyle: this.getCalculatedStyleState('body', 'hide'),
    });
  }

  transitionIn() {
    this.transitionToFeature();
    this.transitionTimeout = setTimeout(() => this.transitionToMain(), 1000);
  }

  transitionOut() {
    this.setState({ isLeaving: true });
    this.transitionToNone();
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
