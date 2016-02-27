import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ImageBody from './ImageBody';

test('ImageBody classes', assert => {
  const props = {
    url: 'http://url.to.image.com'
  };

  const output = shallow(<ImageBody {...props} />);

  assert.plan(2);
  const expected = true;

  let actual = output.hasClass('Climb__Media');

  assert.equal(
    actual,
    expected,
    'Climb__Media'
  );

  actual = output.hasClass('Climb__Media--image');

  assert.equal(
    actual,
    expected,
    'Climb__Media--image'
  );

});

test('ImageBody styles: without height', assert => {
  const props = {
    url: 'http://url.to.image.com'
  };

  const output = shallow(<ImageBody {...props} />);

  const expected = false;
  const actual = output.prop('style').hasOwnProperty('height');

  assert.equal(
    expected,
    actual,
    'height no specified'
  );

  assert.end();
});

test('ImageBody styles: with height', assert => {
  const height = 40;

  const props = {
    url: 'http://url.to.image.com',
    height
  };

  const output = shallow(<ImageBody {...props} />);

  const expected = height;
  const actual = output.prop('style').height;

  assert.equal(
    expected,
    actual,
    'Outputs a height inline style'
  );

  assert.end();
});

