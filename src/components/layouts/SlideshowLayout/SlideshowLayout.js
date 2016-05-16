import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import BigScreenCard from '../../cards/BigScreenCard';
import styles from './SlideshowLayout.sass';
import { propTypes, defaultProps } from '../layoutDefaults';

class SlideshowLayout extends React.Component {

  static propTypes = {
    ...propTypes,
    duration: PropTypes.number.isRequired,
  };

  static defaultProps = {
    ...defaultProps,
    Card: BigScreenCard,
    duration: 5000,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }


  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }


  startTimer() {
    const { duration } = this.props;
    this.timer = setInterval(() => this.showNextItem(), duration);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  showNextItem() {
    const { items } = this.props;
    const { currentIndex } = this.state;

    this.setState({
      currentIndex: currentIndex >= items.length - 1 ? 0 : currentIndex + 1,
    });
  }


  get currentItem() {
    return this.props.items[this.state.currentIndex];
  }

  render() {
    const { Card } = this.props;

    return (
      <div className="Climb--SlideshowLayout">
        {this.currentItem ?
          <Card {...this.currentItem} />
          :
          'Loading'
        }
      </div>
    );
  }
}


export default css(SlideshowLayout, styles);
