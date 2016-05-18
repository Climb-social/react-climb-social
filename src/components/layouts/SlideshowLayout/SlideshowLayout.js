import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

import { propTypes, defaultProps } from '../layoutDefaults';
import styles from './SlideshowLayout.sass';
import BigScreenCard from '../../cards/BigScreenCard/BigScreenCard';


const transitionComponent = ({ children, ...props }) => (
  <div className={`Climb--SlideshowLayout ${styles.root}`}>
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

  state = {
    currentIndex: 0,
    show: true,
  };

  componentDidMount() {
    this.checkStartTimer();
    // setTimeout(() => this.stopTimer(), 4000);
  }

  componentDidUpdate() {
    this.checkStartTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }


  checkStartTimer() {
    if (!this.timer && this.props.items.length) this.startTimer();
  }

  startTimer() {
    const { duration } = this.props;
    this.timer = setInterval(() => this.showNextItem(), duration);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  showNextItem() {
    const { items } = this.props;
    const { currentIndex } = this.state;
    this.setState({ currentIndex: currentIndex >= items.length - 1 ? 0 : currentIndex + 1 });
  }


  render() {
    const { Card, items } = this.props;
    const { currentIndex, show } = this.state;

    const currentItem = items[this.state.currentIndex];

    return (
      <ReactTransitionGroup
        component={transitionComponent}
        children={show && currentItem ?
          <Card
            key={currentItem.id}
            index={currentIndex}
            {...currentItem}
          />
        : null}
      />
    );
  }
}
