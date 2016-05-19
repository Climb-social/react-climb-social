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
    if (!this.timer && this.props.items.length) this.timerStart();
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
    if (!this.state.isInTransition) {
      this.setState({
        isInTransition: true,
        show: false,
      });
    }
  }

  handleCardLeave() {
    if (this.state.isInTransition) {
      setTimeout(() =>
        this.setState({
          isInTransition: false,
          show: true,
          currentIndex: this.getNextItemIndex(),
        }), 0);
      this.timerStart();
    }
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
            onLeave={() => this.handleCardLeave()}
            {...currentItem}
          />
        : null}
      />
    );
  }
}
