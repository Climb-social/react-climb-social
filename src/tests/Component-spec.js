var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('chai').expect;
var Component = require('../Components/Component.jsx');

describe('Component', function () {

    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Component/>);
    });

    it('renders without problems', function () {
        expect(component).to.exist;
    });
});