import React, { PropTypes } from 'react';

const ListView = ({
  items,
  Card
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
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  items: PropTypes.array
};

ListView.defaultProps = {
  items: []
};

export default ListView;
