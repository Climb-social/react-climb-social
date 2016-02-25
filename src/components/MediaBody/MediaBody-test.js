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
  let actual = output.type;

  assert.equal(
    actual,
    expected,
    'VideoBody'
  );

  assert.end()
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
  let actual = output.type;

  assert.equal(
    actual,
    expected,
    'ImageBody'
  );

  assert.end()
});

