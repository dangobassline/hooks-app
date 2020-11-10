import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import '@testing-library/jest-dom';

describe('Pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();
    //wrapper // mount
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
        );

    test('should de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')();
        expect( setUser ).toHaveBeenCalledWith({
            id: 123,
            name: 'Dango'
        })
    });


})
