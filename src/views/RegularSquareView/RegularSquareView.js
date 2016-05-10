import React, { PropTypes } from 'react';
import FocusCard from '../../components/Cards/FocusCard';

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
  Card: FocusCard,
  items: []
};

export default RegularSquareView;
