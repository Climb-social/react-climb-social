import React, { PropTypes } from 'react';
import moment from 'moment';

const Timestamp = ({
  value,
  link,
  }) => {
  const valueStr = moment(value * 1000).fromNow();

  if (link) {
    return (
      <a
        href={link}
        className="Climb-Card__timestamp Climb-Card__timestamp--link"
      >
        {valueStr}
      </a>
    );
  }

  return (
    <span className="Climb-Card__timestamp">
      {valueStr}
    </span>
  );
};

Timestamp.propTypes = {
  value: PropTypes.number.isRequired,
  link: PropTypes.string,
};

export default Timestamp;
