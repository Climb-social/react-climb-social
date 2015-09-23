import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Wall from '../components/Wall.jsx';


describe('Climb.Social Wall', () => {

    let component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Wall/>);
    });

    it('renders without problems', () => {
        expect(component).to.exist;
    });

    it('should have a class of `climb__wall`', () => {
        var node = React.findDOMNode(component);
        var hasClass = node.classList.contains('climb__wall');
        expect(hasClass).to.be.true;
    });

    xit('should display the feed from a `collectedId`', () => {
        component = TestUtils.renderIntoDocument(<Wall collectionId="55a7d29945284ef60c0ce772"/>);
    });

});