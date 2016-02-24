import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import TextBody from './TextBody';

test('TextBody output classes', assert => {
  const renderer = TestUtils.createRenderer();
  const props = {
    text: `I'm <strong> HTML </strong>`
  };

  renderer.render(<TextBody {...props} />);
  const output = renderer.getRenderOutput();

  const expected = true;

  const actual = output
    .props.className
    .includes('Climb__TextBody');

  assert.equal(
    actual,
    expected,
    'TextBody should have a `Climb__TextBody` className'
  );

  assert.end();
});

