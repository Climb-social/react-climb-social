import React, { PropTypes } from 'react';

const Timestamp = ({
  value,
  link
  }) => {
  const valueStr = new Date(value).toLocaleString();
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
