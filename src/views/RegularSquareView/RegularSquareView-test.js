import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import RegularSquareView from './RegularSquareView';
import StackedCard from '../../components/Cards/StackedCard';

test('RegularSquareView classes', assert => {
  const props = {
    collectionId: 'aaa',
    Card: StackedCard
  };
  const output = shallow(<RegularSquareView {...props} />);

  const expected = true;
  const actual = output.hasClass('Climb--RegularSquareView');

  assert.equal(
    actual,
    expected,
    'Climb--RegularSquareView'
  );

  assert.end();
});
