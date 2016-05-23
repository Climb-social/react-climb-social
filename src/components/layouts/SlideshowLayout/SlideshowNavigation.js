import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './SlideshowNavigation.sass';


@css(styles)
export default class SlideshowNavigation extends React.Component {

  static propTypes = {
    playing: PropTypes.bool.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
  };


  handleClick() {
    const { playing, onPlay, onPause } = this.props;
    if (playing) return onPause();
    return onPlay();
  }

  render() {
    const { playing } = this.props;

    return (
      <div
        styleName="root"
        onClick={() => this.handleClick()}
      >
        <div styleName="banner">
          <p>{playing ? 'Playing' : 'Paused'}</p>
        </div>
      </div>
    );
  }
}
