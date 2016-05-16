import React, { PropTypes } from 'react';
import StackedCard from '../../cards/StackedCard/StackedCard';

const ListLayout = ({ items, Card }) => (
  <div className="Climb--ListLayout">
    {items.map(item =>
      <div key={item.id}>
        <Card {...item} />
      </div>
    )}
  </div>
);

ListLayout.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  items: PropTypes.array,
};

ListLayout.defaultProps = {
  Card: StackedCard,
  items: [],
};

export default ListLayout;
