import React, { PropTypes } from 'react';

const Timestamp = ({
  value
  }) => {
  const valueStr = new Date(value).toLocaleString();
  return (
    <h4 className='Climb__Meta Climb__Meta__Timestamp'>
      { valueStr }
    </h4>
  )
};

Timestamp.propTypes = {
  value: PropTypes.number.isRequired
};

export default Timestamp;
