import test from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import MediaBody from './MediaBody';
import VideoBody from './VideoBody';
import ImageBody from './ImageBody';

test('MediaBody element: Video', assert => {
  const renderer = TestUtils.createRenderer();
  const props = {
    videoUrl: 'http://url.to.video.com'
  };

  renderer.render(<MediaBody {...props} />);
  const output = renderer.getRenderOutput();

  const expected = VideoBody;
  const actual = output.type;

  assert.equal(
    actual,
    expected,
    'VideoBody'
  );

  assert.end();
});

test('MediaBody element: Image', assert => {
  const renderer = TestUtils.createRenderer();
  const props = {
    image: {
      url: 'path/to/image.jpg',
      width: 40,
      height: 40
    }
  };

  renderer.render(<MediaBody {...props} />);
  const output = renderer.getRenderOutput();

  const expected = ImageBody;
  const actual = output.type;

  assert.equal(
    actual,
    expected,
    'ImageBody'
  );

  assert.end();
});

test('MediaBody element: Both specified', assert => {
  const renderer = TestUtils.createRenderer();
  const props = {
    image: {
      url: 'path/to/image.jpg',
      width: 40,
      height: 40
    },
    videoUrl: 'http://url.to.video.com'
  };

  renderer.render(<MediaBody {...props} />);
  const output = renderer.getRenderOutput();

  const expected = VideoBody;
  const actual = output.type;

  assert.equal(
    actual,
    expected,
    'VideoBody'
  );

  assert.end();
});

test('MediaBody element: No media', assert => {
  const renderer = TestUtils.createRenderer();
  const props = {
    image: null,
    videoUrl: null
  };

  renderer.render(<MediaBody {...props} />);
  const output = renderer.getRenderOutput();

  const expected = 'span';
  const actual = output.type;

  assert.equal(
    actual,
    expected,
    'No Media message'
  );

  assert.end();
});
