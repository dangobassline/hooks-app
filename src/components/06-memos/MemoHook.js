import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import './estilo.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small> {counter} </small></h3>
            <hr/>
            <p> { memoProcesoPesado } </p>
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
