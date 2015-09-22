jest.dontMock('../src/Components/Component.jsx');

var React = require('react/addons'),
    Checkout = require('../src/Components/Component.jsx'),
    TestUtils = React.addons.TestUtils;

describe('Component', function() {

    it('renders each item as a li', function() {
        expect(true).toEqual(true);
    });

    it('displays the items count', function(){
        expect(true).toEqual(false);
    });
});