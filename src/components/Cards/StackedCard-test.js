import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import StackedCard from './StackedCard';

test('StackedCard output classes', assert => {
  const renderer = TestUtils.createRenderer();
  const props = {
    message: 'I am the message',
    link: 'http://climb.social',
    timestamp: 1455811260,
    author: {
      pic: 'http://url/to/pic.jpg',
      name: 'ClimbSocialUK',
      link: 'http://twitter.com/ClimbSocialUK',
      username: 'ClimbSocialUK'
    },
    sourceType: 'MegaSocial'
  };

  renderer.render(<StackedCard {...props} />);
  const output = renderer.getRenderOutput();

  assert.plan(3);
  const expected = true;

  let actual = output
    .props.className
    .includes('Climb__Card '); // Note: the Space is important here

  assert.equal(
    actual,
    expected,
    'StackedCard should have a `Climb__Card` className'
  );

  actual = output
    .props.className
    .includes('Climb__Card--Stacked');

  assert.equal(
    actual,
    expected,
    'StackedCard should have a `Climb__Card--Stacked` className'
  );

  actual = output
    .props.className
    .includes('Climb__Card--MegaSocial');

  assert.equal(
    actual,
    expected,
    'StackedCard should have a `Climb__Card--MegaSocial` className'
  );
});

