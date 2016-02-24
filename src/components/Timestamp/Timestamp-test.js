import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Timestamp from './Timestamp';

test('Timestamp output classes', assert => {
  const renderer = TestUtils.createRenderer();
  const props = {
    value: 1455702231
  };

  renderer.render(<Timestamp {...props} />);
  const output = renderer.getRenderOutput();

  assert.plan(2);
  const expected = true;

  let actual = output
    .props.className
    .includes('Climb__Meta '); // Note: the Space is important here

  assert.equal(
    actual,
    expected,
    'Timestamp should have a `Climb__Meta` className'
  );

  actual = output
    .props.className
    .includes('Climb__Meta__Timestamp');

  assert.equal(
    actual,
    expected,
    'StackedCard should have a `Climb__Meta__Timestamp` className'
  );
});

