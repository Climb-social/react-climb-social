import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import MediaBody from './MediaBody';
import VideoBody from './VideoBody';
import ImageBody from './ImageBody';

test('MediaBody element: Video', assert => {
  const props = {
    videoUrl: 'http://url.to.video.com',
  };

  const output = shallow(<MediaBody {...props} />);

  const expected = VideoBody;
  const actual = output.type();

  assert.equal(
    actual,
    expected,
    'VideoBody'
  );

  assert.end();
});

test('MediaBody element: Image', assert => {
  const props = {
    image: {
      url: 'path/to/image.jpg',
      width: 40,
      height: 40,
    },
  };

  const output = shallow(<MediaBody {...props} />);

  const expected = ImageBody;
  const actual = output.type();

  assert.equal(
    actual,
    expected,
    'ImageBody'
  );

  assert.end();
});

test('MediaBody element: Both specified', assert => {
  const props = {
    image: {
      url: 'path/to/image.jpg',
      width: 40,
      height: 40,
    },
    videoUrl: 'http://url.to.video.com',
  };

  const output = shallow(<MediaBody {...props} />);

  const expected = VideoBody;
  const actual = output.type();

  assert.equal(
    actual,
    expected,
    'VideoBody'
  );

  assert.end();
});

test('MediaBody element: No media', assert => {
  const props = {
    image: null,
    videoUrl: null,
  };

  const output = shallow(<MediaBody {...props} />);

  const expected = 'span';
  const actual = output.type();

  assert.equal(
    actual,
    expected,
    'No Media message'
  );

  assert.end();
});
