import { PropTypes } from 'react';

export const propsTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  sourceType: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  videoUrl: PropTypes.string,
};

export const defaultProps = {
};
