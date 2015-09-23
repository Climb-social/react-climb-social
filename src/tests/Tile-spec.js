import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Tile from '../components/Tile';


describe('Tile component', () => {

    let component;
    let renderedDOM;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Tile/>);
        renderedDOM = () => React.findDOMNode(component);
    });

    it('renders without problems', () => {
        expect(component).to.exist;
    });

    it('should have a class of `climb__tile`', () => {

        let rootElement = renderedDOM();

        expect(rootElement.tagName).to.equal('DIV');
        expect(rootElement.classList).to.have.length(1);
        expect(rootElement.classList[0]).to.equal('climb__tile');
    });
});