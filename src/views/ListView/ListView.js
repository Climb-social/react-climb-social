import React, { PropTypes } from 'react';

const ListView = ({items, Card}) => (
  <div className='Climb--ListView'>
    {items.map(item =>
      <div key={ item.id }>
        <Card {...item} />
      </div>
    )}
  </div>
);

ListView.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  items: PropTypes.array
};

ListView.defaultProps = {
  items: []
};

export default ListView;
