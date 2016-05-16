import React, { PropTypes } from 'react';
import css from 'react-css-modules';

import styles from './FeatureSlide.sass';


const FeatureSlide = ({ feature, children, reverse }) => (
  <div styleName="root">

    <div styleName={`feature-${reverse ? 'right' : 'left'}`}>
      {feature}
    </div>

    <div styleName={`body-${reverse ? 'left' : 'right'}`}>
      {children}
    </div>

  </div>
);

FeatureSlide.propTypes = {
  feature: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool.isRequired,
};

FeatureSlide.defaultProps = {
  reverse: false,
};

export default css(FeatureSlide, styles);
