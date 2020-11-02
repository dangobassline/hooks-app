import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from "./Small";
import './estilo.css';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter: <Small value={ counter } /> </h1>
            <hr/>
            <button
                className="btn btn-primary"
                children="+1"
                onClick={increment}
            />
            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            > Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}