import React, {useRef} from 'react'
import './estilo.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su Nombre"
            />

            <button
                className="btn btn-outline-primary mt-5"
                children="Focus"
                onClick={ handleClick }
            />

        </div>
    )
}
