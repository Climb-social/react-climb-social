import React, { PropTypes } from 'react';
import Climb from '../../../api';
import ReactTransitionGroup from 'react-addons-transition-group';

import { propTypes, defaultProps } from '../layoutDefaults';
import styles from './SlideshowLayout.sass';
import SlideshowNavigation from './SlideshowNavigation';
import BigScreenCard from '../../cards/BigScreenCard/BigScreenCard';


const transitionComponent = ({ children, ...props }) => (
  <div className={`Climb--SlideshowLayout ${styles.wrapper}`}>
    {React.Children.map(children, child =>
      <div className={styles.item}>
        {React.cloneElement(child, props)}
      </div>
    )}
  </div>
);

transitionComponent.propTypes = {
  children: PropTypes.node,
};


export default class SlideshowLayout extends React.Component {
  static propTypes = {
    ...propTypes,
    duration: PropTypes.number.isRequired,
  };

  static defaultProps = {
    ...defaultProps,
    Card: BigScreenCard,
    duration: 1000 * 10,
  };

  static createStream = Climb.fetchLatestPage;

  state = {
    currentIndex: 0,
    show: true,
    paused: false,
  };

  componentDidMount() {
    this.timerCheck();
  }

  componentDidUpdate() {
    this.timerCheck();
  }

  componentWillUnmount() {
    this.timerStop();
  }


  getNextItemIndex() {
    const { items } = this.props;
    const { currentIndex } = this.state;
    return currentIndex >= items.length - 1 ? 0 : currentIndex + 1;
  }


  timerCheck() {
    const { timer } = this;
    const { paused } = this.state;
    const { items } = this.props;
    if (!paused && !timer && items.length) this.timerStart();
  }

  timerStart() {
    const { duration } = this.props;
    this.timer = setTimeout(() => this.timerTick(), duration);
  }

  timerStop() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  timerReset() {
    this.timerStop();
    this.timerStart();
  }

  timerTick() {
    const { isInTransition, paused } = this.state;
    if (!isInTransition && !paused) this.transitionOut();
  }


  transitionOut() {
    this.setState({
      isInTransition: true,
      show: false,
    }, () => this.timerStop());
  }

  transitionIn() {
    this.setState({
      isInTransition: false,
      show: true,
      currentIndex: this.getNextItemIndex(),
    }, () => this.timerStart());
  }

  pause() {
    this.setState({ paused: true });
    this.timerStop();
  }

  play() {
    this.setState({ paused: false });
    this.timerStart();
  }


  handleCardLeave() {
    if (this.state.isInTransition) {
      setTimeout(() => this.transitionIn(), 0);
    }
  }


  render() {
    const { Card, items } = this.props;
    const { currentIndex, show, paused } = this.state;

    const currentItem = items[this.state.currentIndex];

    // Use className in this component due to props bug in react-css-modules
    // https://github.com/gajus/react-css-modules/issues/58
    return (
      <div className={styles.root}>
        <ReactTransitionGroup
          key="main"
          component={transitionComponent}
          children={show && currentItem ?
            <Card
              key={currentItem.id}
              index={currentIndex}
              onLeave={() => this.handleCardLeave()}
              {...currentItem}
            />
          : null}
        />
        <SlideshowNavigation
          showControls
          playing={!paused}
          onPlay={() => this.play()}
          onPause={() => this.pause()}
        />
      </div>
    );
  }
}
