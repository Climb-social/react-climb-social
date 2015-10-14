import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react/lib/ReactDOM';
import { expect } from 'chai';
import Tile from '../src/components/Tile';
import jsdom from 'mocha-jsdom';


describe('Tile', () => {

    let component;
    let renderedDOM;
    jsdom();

    beforeEach(() => {

        const props = {
            message: "dog man",
            link: "https://www.facebook.com/TheOfficialGrumpyCat/photos/a.562257323810009.1073741825.435475646488178/910240892344982/?type=1",
            author: {
                picture: "http://app.climb.social\media\avatar\The Official Grumpy Cat_2.jpg",
                name: "TheOfficialGrumpyCat",
                username: "The Official Grumpy Cat",
                link: "https://www.facebook.com/TheOfficialGrumpyCat",
                followers_count: 8042132
            },
            timestamp: 1441987349,
            image: {
                url: "https://scontent.xx.fbcdn.net/hphotos-xlp1/v/t1.0-9/p720x720/12002052_910240892344982_4250450079407410721_n.jpg?oh=ac6e6a1286394e399ea6a13523b66070&oe=566BD453",
                width: 720,
                height: 720
            },
            video_url: null,
            source_type: "facebook"
        };

        component = TestUtils.renderIntoDocument(
            <Tile {...props} />
        );
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('renders without problems', () => {
        expect(component).to.exist;
    });

    it('has a class of `climb__tile`', () => {

        let rootElement = renderedDOM();

        expect(rootElement.tagName).to.equal('DIV');
        //expect(rootElement).to.equal(2);
        //expect(rootElement.classList[1]).to.equal('climb__tile--twitter');
    });

    xit('has a child with a class of `climb__tile__content`', () => {
        expect(true).to.equal(false);
    });

    xit('renders a message (if specified)', () => {
        expect(true).to.equal(false);
    });

    xit('renders an image (if specified)', () => {
        expect(true).to.equal(false);
        // Check class: has-media
        // Check class: has-image
    });

    xit('renders a video (if specified)', () => {
        expect(true).to.equal(false);
        // Check class: has-media
        // Check class: has-video
    });

    xit('displays a link to the author', () => {
        expect(true).to.equal(false);
    });

    xit('displays a link to the original item', () => {
        expect(true).to.equal(false);
    });
});
