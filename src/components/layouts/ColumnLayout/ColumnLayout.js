import React, { PropTypes } from 'react';
import css from 'react-css-modules';
import bricks from 'bricks.js';

import StackedCard from '../../cards/StackedCard/StackedCard';
import styles from './ColumnLayout.sass';


class ColumnLayout extends React.Component {

  componentDidMount() {
    this.packer = bricks({
      container: '.Climb--ColumnLayout--inner',
      packed: 'data-packed',
      sizes: this.props.sizes,
    });

    this.packer.resize(true);
    this.packer.pack();
  }

  componentDidUpdate() {
    this.packer.pack();
  }

  componentWillUnmount() {
    this.packer.resize(false); // Does this destory ?
  }

  render() {
    const { Card, items } = this.props;

    return (
      <div className="Climb--ColumnLayout" styleName="root">
        <div className="Climb--ColumnLayout--inner">
          {items.map(item =>
            <div key={item.id} style={{ width: 290 }} styleName="card">
              <Card {...item} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

ColumnLayout.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  items: PropTypes.array,
  sizes: PropTypes.array,
};

ColumnLayout.defaultProps = {
  Card: StackedCard,
  items: [],
  sizes: [
    { columns: 1, gutter: 30 },
    { mq: '640px', columns: 2, gutter: 30 },
    { mq: '945px', columns: 3, gutter: 30 },
    { mq: '1250px', columns: 4, gutter: 30 },
    { mq: '1556px', columns: 5, gutter: 30 },
    { mq: '1860px', columns: 6, gutter: 30 },
  ],
};

export default css(ColumnLayout, styles);
