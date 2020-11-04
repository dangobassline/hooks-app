import React, {useContext} from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1. Obtener la referencia al context userContext
    // 2. setUser
    // 3.

    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 123,
                    name: "Dango"
                }) }
            >
            Login
            </button>
        </div>
    )
}
