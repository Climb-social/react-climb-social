import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import css from 'react-css-modules';
import reduce from 'lodash.reduce';

import { propTypes, defaultProps } from './PanelDefaults';
import styles from './FeaturePanel.sass';


const elementStyleStates = {
  feature: {
    initial: {
      opacity: 0.1,
      width: 100,
      scale: 0.75,
    },
    feature: {
      opacity: 1,
      width: 100,
      scale: 1,
    },
    show: {
      opacity: 1,
      width: 66,
      scale: 1,
    },
    hide: {
      opacity: 0,
      width: 66,
      scale: 1,
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
    ...propTypes,
    feature: PropTypes.node.isRequired,
    reverse: PropTypes.bool.isRequired,
    duration: PropTypes.number.isRequired,
  };

  static defaultProps = {
    ...defaultProps,
    reverse: false,
    duration: 1500,
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


  transitionToFeature() {
    this.setState({
      featureStyle: this.getCalculatedStyleState('feature', 'feature'),
      bodyStyle: this.getCalculatedStyleState('body', 'initial'),
    });
  }

  transitionToShow() {
    this.setState({
      featureStyle: this.getCalculatedStyleState('feature', 'show'),
      bodyStyle: this.getCalculatedStyleState('body', 'show'),
    });
  }

  transitionToHide() {
    this.setState({
      featureStyle: this.getCalculatedStyleState('feature', 'hide'),
      bodyStyle: this.getCalculatedStyleState('body', 'hide'),
    });
  }


  transitionTimeout = null;

  transitionIn() {
    const { duration } = this.props;
    this.transitionToFeature();
    this.transitionTimeout = setTimeout(() => this.transitionToShow(), duration);
  }

  transitionOut() {
    this.setState({ isLeaving: true });
    this.transitionToHide();
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
      <div
        styleName="root"
        className="Climb-BigScreenCard__panel Climb-BigScreenCard__panel--feature"
      >

        <Motion
          style={featureStyle}
          onRest={() => this.handleRest()}
        >{({ width, scale, ...otherStyles }) =>
          <div
            className={`
              Climb-BigScreenCard__panel__feature
              ${styles[`feature-${reverse ? 'right' : 'left'}`]}
            `}
            style={{
              ...otherStyles,
              width: `${width}%`,
              transform: `scale(${scale})`,
            }}
            children={feature}
          />
        }</Motion>

        <Motion
          style={bodyStyle}
        >{({ left, ...otherStyles }) =>
          <div
            className={`
              Climb-BigScreenCard__panel__body
              ${styles[`body-${reverse ? 'left' : 'right'}`]}
            `}
            style={{
              ...otherStyles,
              left: !reverse ? 'auto' : `${left}%`,
              right: reverse ? 'auto' : `${left}%`,
            }}
          >
            <div className={styles.bodyInner}>{children}</div>
          </div>
        }</Motion>
      </div>
    );
  }
}
