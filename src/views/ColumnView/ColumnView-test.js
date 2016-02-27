import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ColumnView from './ColumnView';
import StackedCard from '../../components/Cards/StackedCard';

test('ColumnView classes', assert => {
  const props = {
    collectionId: 'aaa',
    Card: StackedCard
  };
  const output = shallow(<ColumnView {...props} />);

  const expected = true;
  const actual = output.hasClass('Climb--ColumnView');

  assert.equal(
    actual,
    expected,
    'Climb--ColumnView'
  );

  assert.end();
});
