var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('chai').expect;
var Wall = require('../Components/ClimbSocialWall.jsx');

describe('Climb.Social Wall', function () {

    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Wall/>);
    });

    it('renders without problems', () => {
        expect(component).to.exist;
    });

    it('should have a class of `climb__wall`', () => {
        expect(component.getDOMNode().className.trim()).to.equal('climb__wall');
    });

    xit('should be filled with items of class `climb__tile`', () => {
        expect(true).to.equal(false);
    });

    xit('should error without a `collectionId` prop', () => {
        expect(true).to.equal(false);
    });

    xit('should display the feed from a `collectedId`', () => {
        expect(true).to.equal(false);
    });
});