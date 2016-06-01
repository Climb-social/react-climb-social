import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './SlideshowNavigation.sass';


@css(styles)
export default class SlideshowNavigation extends React.Component {

  static propTypes = {
    showControls: PropTypes.bool.isRequired,
    playing: PropTypes.bool.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
  };

  static defaultProps = {
    showControls: false,
  }


  handleClick() {
    const { playing, onPlay, onPause } = this.props;
    if (playing) return onPause();
    return onPlay();
  }

  render() {
    const { showControls, playing } = this.props;

    return (
      <div
        styleName="root"
        className="Climb-SlideshowLayout__navigation"
        onClick={() => this.handleClick()}
      >
        {showControls ?
          <div styleName="banner">
            <p>{playing ? 'Playing' : 'Paused'}</p>
          </div>
        : null}
      </div>
    );
  }
}
