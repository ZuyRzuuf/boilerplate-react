import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

describe('A suite', function() {
    test('renders isolated component correctly', () => {
        const wrapper = shallow(
            <App />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders components tree correctly', () => {
        const wrapper = mount(
            <App />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should renders HTML tree correctly', () => {
        const html = render(
            <App />
        );
        expect(html).toMatchSnapshot();
    });
});
