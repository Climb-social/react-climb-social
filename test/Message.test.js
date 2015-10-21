import React from 'react/react';
import ReactDOM from 'react/lib/ReactDOM';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Message from '../src/components/common/Message';
import jsdom from 'mocha-jsdom';


describe('Message', () => {

    let component;
    let renderedDOM;
    jsdom();

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Message body="hello <strong>person</strong>!"/>);
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('renders without problems', () => {
        expect(component).to.exist;
    });

    it('has a class of `climb__tile__message`', () => {
        let rootElement = renderedDOM();
        expect(rootElement.tagName).to.equal('DIV');
        expect(rootElement.classList).to.have.length(1);
        expect(rootElement.classList[0]).to.equal('climb__message');
    });

    it('renders html', () => {
        let rootElement = renderedDOM();
        expect(rootElement.children.length).to.equal(1);
        expect(rootElement.innerHTML).to.equal("hello <strong>person</strong>!");
    });
});
