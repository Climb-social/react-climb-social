import React from 'react';
import { Motion, spring } from 'react-motion';
import css from 'react-css-modules';
import reduce from 'lodash.reduce';

import { propTypes, defaultProps } from './PanelDefaults';
import styles from './Panel.sass';


const styleStates = {
  initial: {
    opacity: 0,
    scale: 0.75,
  },

  show: {
    opacity: 1,
    scale: 1,
  },

  hide: {
    opacity: 0,
    scale: 1,
  },
};


@css(styles)
class Panel extends React.Component {
  static propTypes = {
    ...propTypes,
  };

  static defaultProps = {
    ...defaultProps,
  };

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      style: this.getCalculatedStyleState('initial'),
    };
  }

  state = {
    isLeaving: false,
    style: null,
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

  getCalculatedStyleState(frame, springOptions = this.props.spring) {
    const frameStyles = styleStates[frame];
    return reduce(
      frameStyles,
      (result, value, key) => ({ ...result, ...{ [key]: spring(value, springOptions) } }),
      {});
  }


  transitionToShow() {
    this.setState({
      style: this.getCalculatedStyleState('show'),
    });
  }

  transitionToHide() {
    this.setState({
      style: this.getCalculatedStyleState('hide'),
    });
  }


  transitionIn() {
    this.transitionToShow();
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
    const { children } = this.props;
    const { style } = this.state;

    return (
      <div
        styleName="root"
        className="Climb-BigScreenCard__panel"
      >
        <Motion
          style={style}
          onRest={() => this.handleRest()}
        >{({ scale, ...otherStyles }) =>
          <div
            className={`
              Climb-BigScreenCard__panel__body
              ${styles.body}
            `}
            style={{
              ...otherStyles,
              transform: `scale(${scale})`,
            }}
            children={children}
          />
        }</Motion>
      </div>
    );
  }
}

export default Panel;
