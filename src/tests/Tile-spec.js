import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Tile from '../components/Tile';


describe('Tile', () => {

    let component;
    let renderedDOM;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Tile/>);
        renderedDOM = () => React.findDOMNode(component);
    });

    it('renders without problems', () => {
        expect(component).to.exist;
    });

    it('has a class of `climb__tile`', () => {

        let rootElement = renderedDOM();

        expect(rootElement.tagName).to.equal('DIV');
        expect(rootElement.classList).to.have.length(1);
        expect(rootElement.classList[0]).to.equal('climb__tile');
    });

    xit('has a child with a class of `climb__tile__content`', () => {
        expect(true).to.equal(false);
    });

    xit('renders a message (if specified)', () => {
        expect(true).to.equal(false);
    });

    xit('renders an image (if specified)', () => {
        expect(true).to.equal(false);
    });

    xit('renders a video (if specified)', () => {
        expect(true).to.equal(false);
    });

    xit('displays a link to the author', () => {
        expect(true).to.equal(false);
    });

    xit('displays a link to the original item', () => {
        expect(true).to.equal(false);
    });
});