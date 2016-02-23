import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import BasicCard from '../BasicCard';

test('BasicCard output classes', assert => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<BasicCard />);
  const output = renderer.getRenderOutput();

  const expected = 'Climb__Card Climb__Card--Basic';
  const actual = output.props.className;
  assert.equal(actual, expected, 'BasicCard should have a `Climb__Card Climb__Card--Basic` className');
  assert.end();
});
