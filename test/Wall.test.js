import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Wall from '../src/components/Wall';
import jsdom from 'mocha-jsdom';


describe('Wall', () => {

    let component;
    let renderedDOM;
    jsdom();

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Wall collectionId="55a7d29945284ef60c0ce772"/>);
        renderedDOM = () => React.findDOMNode(component);
    });

    it('renders without problems', () => {
        expect(component).to.exist;
    });

    it('has a class of `climb__wall`', () => {

        let rootElement = renderedDOM();

        expect(rootElement.tagName).to.equal('DIV');
        expect(rootElement.classList).to.have.length(1);
        expect(rootElement.classList[0]).to.equal('climb__wall');
    });

    xit('Can limit the number of items displayed', () => {
        component = TestUtils.renderIntoDocument(<Wall collectionId="55a7d29945284ef60c0ce772" limit="4" />);
        renderedDOM = () => React.findDOMNode(component);

        let rootElement = renderedDOM();

        expect(rootElement.children.length).to.equal(4);
    });
});
