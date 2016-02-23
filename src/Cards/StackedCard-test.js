import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import StackedCard from './StackedCard';

test('StackedCard output classes', assert => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<StackedCard />);
  const output = renderer.getRenderOutput();

  const expected = 'Climb__Card Climb__Card--Stacked';
  const actual = output.props.className;
  assert.equal(actual, expected, 'StackedCard should have a `Climb__Card Climb__Card--Stacked` className');
  assert.end();
});
