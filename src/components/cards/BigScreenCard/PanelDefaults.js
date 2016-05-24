import { PropTypes } from 'react';
import { presets as motionPresets } from 'react-motion';

export const propTypes = {
  children: PropTypes.node.isRequired,
  onLeave: PropTypes.func,
  spring: PropTypes.shape({
    stiffness: PropTypes.number.isRequired,
    damping: PropTypes.number.isRequired,
  }),
};

export const defaultProps = {
  spring: motionPresets.gentle,
};
