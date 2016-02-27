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
  assert.plan(2);

  const height = 40;
  const url = 'http://url.to.image.com';
  const props = {
    url,
    height
  };

  const output = shallow(<ImageBody {...props} />);

  let expected = height;
  let actual = output.prop('style').height;

  assert.equal(
    expected,
    actual,
    'Outputs a height inline style'
  );

  expected = true;
  actual = output.prop('style').hasOwnProperty('backgroundImage');

  assert.equal(
    expected,
    actual,
    'Outputs a backgroundImage inline style'
  );
});


test('ImageBody inline image url', assert => {
  const img = 'http://url.to.image.com';
  const props = {
    url: img
  };

  const output = shallow(<ImageBody {...props} />);

  const expected = `url(${img})`;
  const actual = output.prop('style').backgroundImage;

  assert.equal(
    expected,
    actual,
    'backgroundImage url'
  );

  assert.end();
});

