import React, { PropTypes } from 'react';
import BasicCard from '../Cards/BasicCard';

const ListView = ({
  Card = BasicCard,
  items,
  }) => {
  return (
    <div className='Climb--ListView'>
      {items.map(item => {
        return (
          <Card key={ item.id } {...item} />
        );
      })}
    </div>
  );
};

ListView.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]),
  items: PropTypes.array.isRequired
};

export default ListView;
