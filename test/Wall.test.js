import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react/lib/ReactDOM';
import {expect, chai} from 'chai';
import Wall from '../src/components/Wall';
import jsdom from 'mocha-jsdom';


describe('Wall', () => {

    let component;
    let renderedDOM;
    jsdom();

    it('renders without problems', () => {
        const component = TestUtils.renderIntoDocument(<Wall items={{}}/>);
        expect(component).to.exist;
    });

    xit('has a class of `climb__wall`', () => {

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

    xit('calls `initCallback` if defined', () => {

        window.climb = {
            initCallback: sinon.spy()
        };

        component = TestUtils.renderIntoDocument(<Wall collectionId="55a7d29945284ef60c0ce772"/>);
        renderedDOM = () => React.findDOMNode(component);

        component.setState({
            items: [{
                id: "001600c345284d54ec8d0c54",
                message: "",
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
            }]
        });

        expect(window.climb.initCallback).to.have.been.calledOnce;

    });
});
