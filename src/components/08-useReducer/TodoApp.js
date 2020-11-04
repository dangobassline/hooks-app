import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd';

import './estilo.css'

//El init da el estado inicial del reducer
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    //declaramos el useReducer
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //El useEffect guardara cualquier cambio que se presente en los todos en el localstore.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    //de TodoAdd viene la orden para agregar a newTodo; haciendo el proceso en el Switch de todoReducer
    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    //Función que eliminará un objeto de la lista; haciendo el proceso en el Switch de todoReducer
    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

    //Función que tachara si la acción de la lista fue realizada; haciendo el proceso en el Switch de todoReducer
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }


    return (
        <div>
            <h1>TodoApp <small> = {todos.length}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    {/* Llamamos al componente TodoList */}
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    {/* Llamamos al componente TodoAdd */}
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}
