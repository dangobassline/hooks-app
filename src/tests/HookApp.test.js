import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { HookApp } from "../../src/HookApp";


describe('Test al componente HookApp', () => {

    test('should hacer el Snapshot del componente correctamente', () => {
        const wrapper = shallow( <HookApp /> );
        expect(wrapper).toMatchSnapshot();
    });

});
