import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import css from 'react-css-modules';

import styles from './FeatureSlide.sass';

const featureStylesHide = {
  opacity: spring(0.01),
};
const featureStylesShow = {
  opacity: spring(1),
};

const bodyStylesHide = {
  opacity: spring(0),
};
const bodyStylesShow = {
  opacity: spring(1),
};


class FeatureSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featureStyles: featureStylesHide,
      bodyStyles: bodyStylesHide,
    };
  }


  componentDidMount() {
    this.showFeature();
    setTimeout(() => this.showBody(), 1000);
  }


  showFeature() {
    this.setState({ featureStyles: featureStylesShow });
  }

  showBody() {
    this.setState({ bodyStyles: bodyStylesShow });
  }


  hideFeature() {
    this.setState({ featureStyles: featureStylesHide });
  }

  hideBody() {
    this.setState({ bodyStyles: bodyStylesHide });
  }


  render() {
    const { feature, children, reverse } = this.props;
    const { featureStyles, bodyStyles } = this.state;

    return (
      <div styleName="root">

        <Motion style={featureStyles}>
          {interpolatingStyle =>
            <div
              className={styles[`feature-${reverse ? 'right' : 'left'}`]}
              style={interpolatingStyle}
            >
              {feature}
            </div>
          }
        </Motion>

        <Motion style={bodyStyles}>
          {interpolatingStyle =>
            <div
              className={styles[`body-${reverse ? 'left' : 'right'}`]}
              style={interpolatingStyle}
            >
              {children}
            </div>
          }
        </Motion>
      </div>
    );
  }
}


FeatureSlide.propTypes = {
  feature: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool.isRequired,
};

FeatureSlide.defaultProps = {
  reverse: false,
};

export default css(FeatureSlide, styles);
