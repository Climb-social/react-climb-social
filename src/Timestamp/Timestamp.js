import React, { PropTypes } from 'react';
import moment from 'moment';

const Timestamp = ({
  value,
  link
  }) => {
  const valueStr = moment(value * 1000).fromNow();
  return (
    <a href={ link }
       className='Climb__Meta Climb__Meta__Timestamp'>
      { valueStr }
    </a>
  )
};

Timestamp.propTypes = {
  value: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired
};

export default Timestamp;
