import test from 'tape';
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import ListView from '../ListView'

test('ListView output classes', assert => {

  const renderer = TestUtils.createRenderer();
  renderer.render(<ListView />);
  const output = renderer.getRenderOutput();

  const expected = 'Climb--ListView';
  const actual = output.props.className;
  assert.equal(actual, expected, 'ListView should have a `Climb--ListView` className');
  assert.end();
});
