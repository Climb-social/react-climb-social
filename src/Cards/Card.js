import React, { PropTypes } from 'react';

const Card = SubCard => props => {
  return (
    <SubCard {...props} />
  );
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  timestamp: PropTypes.string.number,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired,
  sourceType: PropTypes.string.isRequired
};

export default Card;
