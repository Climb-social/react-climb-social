import { PropTypes } from 'react';

export const propType = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  items: PropTypes.array,
};

export const defaultProps = {
  Card: undefined,
  items: [],
};
