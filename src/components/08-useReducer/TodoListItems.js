import React from 'react'

export const TodoListItems = ({todo,index,handleDelete,handleToggle}) => {
    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p
            //pregunta si el state de todo.done es true, de ser asi se marca el estilo complete.
                className={`${todo.done && 'complete'}`}
                onClick={ () => handleToggle( todo.id )}
            >
                { index + 1}. {todo.desc}
            </p>
            <button
                children="Borrar"
                className="btn btn-danger float-right"
                onClick={ () => handleDelete( todo.id ) }
            />
        </li>
    )
}