import { shallow } from 'enzyme';
import React from 'react';
import { MainAnchor } from './';


describe('MainAnchor component tests', () => {
    test('MainAnchor should output div with text `main content`', () => {
        const dom = shallow(
            <MainAnchor />
        );

        expect(dom.text()).toEqual('main content');
    });
});