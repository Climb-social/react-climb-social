import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import css from 'react-css-modules';

import styles from './FeaturePanel.sass';


const featureStyleHide = {
  opacity: spring(0.0),
};
const featureStyleShow = {
  opacity: spring(1),
};

const bodyStyleHide = {
  opacity: spring(0),
};
const bodyStyleShow = {
  opacity: spring(1),
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
    featureStyle: featureStyleHide,
    bodyStyle: bodyStyleHide,
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
    clearTimeout(this.showBodyTimeout);
    clearTimeout(this.staggeredTransitionTimeout);
  }


  handleOnRest() {
    if (this.state.isLeaving) this.props.onLeave();
  }

  staggeredTransitionTimeout = null;

  transitionIn() {
    this.showFeature();
    this.staggeredTransitionTimeout = setTimeout(() => this.showBody(), 500);
  }

  transitionOut() {
    this.setState({ isLeaving: true });
    this.hideBody();
    this.staggeredTransitionTimeout = setTimeout(() => this.hideFeature(), 250);
  }

  showFeature = () => this.setState({ featureStyle: featureStyleShow });
  showBody = () => this.setState({ bodyStyle: bodyStyleShow });
  hideFeature = () => this.setState({ featureStyle: featureStyleHide });
  hideBody = () => this.setState({ bodyStyle: bodyStyleHide });


  render() {
    const { feature, children, reverse } = this.props;
    const { featureStyle, bodyStyle } = this.state;

    return (
      <div styleName="root">

        <Motion
          style={featureStyle}
          onRest={() => this.handleOnRest()}
        >{style =>
          <div
            className={styles[`feature-${reverse ? 'right' : 'left'}`]}
            style={style}
            children={feature}
          />
        }</Motion>

        <Motion
          style={bodyStyle}
        >{style =>
          <div
            className={styles[`body-${reverse ? 'left' : 'right'}`]}
            style={style}
            children={children}
          />
        }</Motion>
      </div>
    );
  }
}
