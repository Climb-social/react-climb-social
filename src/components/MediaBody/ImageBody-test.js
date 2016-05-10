import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ImageBody from './ImageBody';

const IMAGE_URL = 'http://url.to.image.com';

const formatUrl = url => `url(${url})`;
const randomSize = () => Math.floor(Math.random() * 100) + 10;


test('ImageBody default classes', t => {
  const props = {
    url: IMAGE_URL,
  };

  const output = shallow(<ImageBody {...props} />);

  t.plan(2);

  t.equal(output.hasClass('Climb__Media'), true, 'has Climb__Media class');

  t.equal(output.hasClass('Climb__Media--image'), true, 'has Climb__Media--image class');

  t.end();
});


test('ImageBody with height', t => {
  const props = {
    url: IMAGE_URL,
    height: randomSize(),
  };

  const output = shallow(<ImageBody {...props} />);

  t.plan(3);

  t.equal(output.prop('height'), props.height, 'correct height attribute');

  t.equal(output.prop('width'), undefined, 'no width attribute');

  t.equal(output.prop('src'), props.url, 'correct image src');

  t.end();
});

test('ImageBody with width', t => {
  const props = {
    url: IMAGE_URL,
    width: randomSize(),
  };

  const output = shallow(<ImageBody {...props} />);

  t.plan(3);

  t.equal(output.prop('width'), props.width, 'correct width attribute');

  t.equal(output.prop('height'), undefined, 'no height attribute');

  t.equal(output.prop('src'), props.url, 'correct image src');

  t.end();
});

test('ImageBody with width and height', t => {
  const props = {
    url: IMAGE_URL,
    width: randomSize(),
    height: randomSize(),
  };

  const output = shallow(<ImageBody {...props} />);

  t.plan(3);

  t.equal(output.prop('width'), props.width, 'correct width attribute');

  t.equal(output.prop('height'), props.height, 'correct height attribute');

  t.equal(output.prop('src'), props.url, 'correct image src');

  t.end();
});


test('ImageBody as background with width', t => {
  const props = {
    url: IMAGE_URL,
    asBackground: true,
    width: randomSize(),
  };

  const output = shallow(<ImageBody {...props} />);

  t.plan(3);

  t.equal(output.prop('style').width, props.width, 'correct width style');

  t.equal(output.prop('style').height, undefined, 'no height style specified');

  t.equal(output.prop('style').backgroundImage, formatUrl(props.url), 'correct background-image style');

  t.end();
});

test('ImageBody as background with width and height', t => {
  const props = {
    url: IMAGE_URL,
    asBackground: true,
    width: randomSize(),
    height: randomSize(),
  };

  const output = shallow(<ImageBody {...props} />);

  t.plan(3);

  t.equal(output.prop('style').width, props.width, 'correct width style');

  t.equal(output.prop('style').height, props.height, 'correct height style');

  t.equal(output.prop('style').backgroundImage, formatUrl(props.url), 'correct background-image style');

  t.end();
});

