import React from 'react';
import {useCounter} from '../../hooks/useCounter'

import './counter.css';


export const CounterWithCustomHook = () => {

    const {counter,increment,decrement,resetCounter} = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr/>
            <div className='btn-group-lg'>
                <button
                    className='btn btn-primary'
                    onClick={() => decrement(2)}
                    children='-1'
                />
                <button
                    className='btn btn-danger'
                    onClick={resetCounter}
                    children='Reset'
                />
                <button
                    className='btn btn-primary'
                    onClick={() => increment(2)}
                    children='+1'
                />
            </div>
        </>
    )
}