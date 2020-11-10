import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';
import '@testing-library/jest-dom';

describe('Pruebas en <AppRouter />', () => {

    const user = {
        id: 1,
        name: 'Dango'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('should de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
