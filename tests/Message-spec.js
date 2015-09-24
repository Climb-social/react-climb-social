import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Message from '../components/Message';


describe('Tile Message', () => {

    let component;
    let renderedDOM;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Message body="hello <strong>person</strong>!"/>);
        renderedDOM = () => React.findDOMNode(component);
    });

    it('renders without problems', () => {
        expect(component).to.exist;
    });

    it('has a class of `climb__tile__message`', () => {
        let rootElement = renderedDOM();
        expect(rootElement.tagName).to.equal('DIV');
        expect(rootElement.classList).to.have.length(1);
        expect(rootElement.classList[0]).to.equal('climb__tile__message');
    });

    it('renders html', () => {
        let rootElement = renderedDOM();
        expect(rootElement.children.length).to.equal(1);
        expect(rootElement.innerHTML).to.equal("hello <strong>person</strong>!");
    });
});