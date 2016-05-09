import React, { PropTypes } from 'react';

const RegularSquareView = ({Card, items}) => (
  <div className='Climb--RegularSquareView'>
    {items.map(item =>
      <div key={ item.id } className='Climb--RegularSquareView__square'>
        <Card {...item} />
      </div>
    )}
  </div>
);

RegularSquareView.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  items: PropTypes.array
};

RegularSquareView.defaultProps = {
  items: []
};

export default RegularSquareView;
