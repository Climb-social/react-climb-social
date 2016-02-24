import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import ColumnView from './ColumnView';

test('ColumnView output classes', assert => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<ColumnView collectionId='aaa' />);
  const output = renderer.getRenderOutput();

  const expected = 'Climb--ColumnView';
  const actual = output.props.className;
  assert.equal(actual, expected, 'ColumnView should have a `Climb--ColumnView` className');
  assert.end();
});
