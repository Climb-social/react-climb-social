import React, { PropTypes } from 'react';
import FocusCard from '../../cards/FocusCard/FocusCard';


const SquareLayout = ({ Card, items }) => (
  <div className="Climb--SquareLayout">
    {items.map(item =>
      <div key={item.id} className="Climb--SquareLayout__square">
        <Card {...item} />
      </div>
    )}
  </div>
);

SquareLayout.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  items: PropTypes.array,
};

SquareLayout.defaultProps = {
  Card: FocusCard,
  items: [],
};

export default SquareLayout;
