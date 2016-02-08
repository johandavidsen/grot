import React from 'react';
import assert from 'assert';
import Grot from '../src/index';
import TestUtils from 'react-addons-test-utils';

describe('GrotHello component', () => {

    it('Content should be equal to "Grót - Hello from Grót" ', () => {

        var renderedComponent = TestUtils.renderIntoDocument(
            <Grot.GrotHello />
        );

        var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
            renderedComponent,
            'h1'
        );

        assert.equal(inputComponent.textContent, 'Grót - Hello from Grót');
    });
});
