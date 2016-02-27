import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Publisher from './Publisher';

test('Publisher output classes', assert => {
  const renderer = TestUtils.createRenderer();
  const props = {
    pic: 'http://100shapes.com/pic.jpg',
    displayName: 'Climb Social',
    username: 'ClimbSocialUK',
    profileLink: 'http://twitter.com/ClimbSocialUK'
  };

  renderer.render(<Publisher {...props} />);
  const output = renderer.getRenderOutput();

  assert.plan(2);
  const expected = true;

  let actual = output
    .props.className
    .includes('Climb__Meta '); // Note: the Space is important here

  assert.equal(
    actual,
    expected,
    'Climb__Meta'
  );

  actual = output
    .props.className
    .includes('Climb__Meta__Publisher');

  assert.equal(
    actual,
    expected,
    'Climb__Meta__Publisher'
  );
});

