import React from 'react'
import { TodoListItems } from './TodoListItems'


export const TodoList = ({todos,handleDelete,handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo,i) => (
                    <TodoListItems
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    )
}