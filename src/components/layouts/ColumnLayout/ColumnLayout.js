import React, { PropTypes } from 'react';
import bricks from 'bricks.js';

import styles from './ColumnLayout.sass';
import StackedCard from '../../cards/StackedCard/StackedCard';


export default class ColumnLayout extends React.Component {

  static propTypes = {
    Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
    items: PropTypes.array,
    sizes: PropTypes.array,
  };

  static defaultProps = {
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

    // Use className in this component due to props bug in react-css-modules
    // https://github.com/gajus/react-css-modules/issues/58
    return (
      <div className="Climb--ColumnLayout" className={`Climb--ColumnLayout ${styles.root}`}>
        <div className="Climb--ColumnLayout__inner">
          {items.map(item =>
            <div
              key={item.id}
              style={{ width: 290 }}
              className={`Climb--ColumnLayout__item ${styles.item}`}
              children={<Card {...item} />}
            />
          )}
        </div>
      </div>
    );
  }
}
