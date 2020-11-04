
//el state sera un arreglo vacio
//el switch verificara la acción, en caso de encontrarse la acción de agregar, la agragara al state
//si no retornara el state vacio
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
            break;
        //delete buscara el id y lo borrara
        case 'delete':
            return state.filter( todo => todo.id !== action.payload);
        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload)
                ? {...todo, done: !todo.done}
                : todo
            );
        //toggle antiguo cumpliendo la misma función pero extenso
        case 'toggle-old':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else{
                        return todo;
                }
            })
        default:
            return state;
    }
}