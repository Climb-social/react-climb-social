import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import StackedCard from './StackedCard';

test('StackedCard classes', assert => {
  const props = {
    message: 'I am the message',
    link: 'http://climb.social',
    timestamp: 1455811260,
    author: {
      picture: 'http://url/to/pic.jpg',
      name: 'ClimbSocialUK',
      link: 'http://twitter.com/ClimbSocialUK',
      username: 'ClimbSocialUK',
    },
    sourceType: 'MegaSocial',
  };

  const output = shallow(<StackedCard {...props} />);

  assert.plan(3);
  const expected = true;

  let actual = output.hasClass('Climb__Card');

  assert.equal(
    actual,
    expected,
    'Climb__Card'
  );

  actual = output.hasClass('Climb__Card--Stacked');

  assert.equal(
    actual,
    expected,
    'Climb__Card--Stacked'
  );

  actual = output.hasClass('Climb__Card--MegaSocial');

  assert.equal(
    actual,
    expected,
    'Climb__Card--MegaSocial'
  );
});

