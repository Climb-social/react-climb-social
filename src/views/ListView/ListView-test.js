import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ListView from './ListView';
import StackedCard from '../../components/Cards/StackedCard';

test('ListView output classes', assert => {
  const props = {
    collectionId: 'aaa',
    Card: StackedCard
  };
  const output = shallow(<ListView {...props} />);

  const expected = true;
  const actual = output.hasClass('Climb--ListView');

  assert.equal(
    actual,
    expected,
    'Climb--ListView'
  );

  assert.end();
});
