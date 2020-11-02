import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import './estilo.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter+1);
    // }

    const increment = useCallback(
        (num) => {
            setCounter( c => c + num);
        }, [setCounter] );

        useEffect(() => {
        }, [increment])

    return (
        <div>
            <h1>useCallback Hook</h1>
            <h3>Contador {counter} </h3>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
