import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Tile from '../components/Tile';


describe('Tile', () => {

    let component;
    let renderedDOM;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <Tile source_type="twitter"
                  message="message text"
                  media="http://media.png"/>
        );
        renderedDOM = () => React.findDOMNode(component);
    });

    it('renders without problems', () => {
        expect(component).to.exist;
    });

    it('has a class of `climb__tile`', () => {

        let rootElement = renderedDOM();

        expect(rootElement.tagName).to.equal('DIV');
        expect(rootElement.classList).to.have.length(2);
        expect(rootElement.classList[0]).to.equal('climb__tile');
        expect(rootElement.classList[1]).to.equal('climb__tile--twitter');
    });

    it('has a class of `climb__tile`', () => {

        let rootElement = renderedDOM();

        expect(rootElement.tagName).to.equal('DIV');
        expect(rootElement.classList).to.have.length(2);
        expect(rootElement.classList[0]).to.equal('climb__tile');
        expect(rootElement.classList[1]).to.equal('climb__tile--twitter');
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

    xit('has a class of `climb__tile--has-media` if an image of video is specified', () => {
        expect(true).to.equal(false);
    });

    xit('has a class of `climb__tile--has-image` if an image is specified', () => {
        expect(true).to.equal(false);
    });

    xit('has a class of `climb__tile--has-video` if a video is specified', () => {
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