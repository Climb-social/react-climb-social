var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('chai').expect;
var Component = require('../Components/Component.jsx');

describe('Component', function () {
    it('renders without problems', function () {
        var component = TestUtils.renderIntoDocument(<Component/>);
        expect(component).to.exist;
    });
});