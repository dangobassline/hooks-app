import React from 'react';
import { mount} from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import '@testing-library/jest-dom';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Dango',
        email: 'dango@mail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
                user:user
        }}>
            <HomeScreen />
        </UserContext.Provider>
        );


    test('should de mostrar el componente', () => {
        expect (wrapper).toMatchSnapshot();
    });

})
