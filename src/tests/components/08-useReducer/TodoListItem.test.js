import React from 'react';
const { shallow } = require("enzyme")
const { TodoListItems } = require("../../../components/08-useReducer/TodoListItems")
const { demoTodos } = require("../fixtures/demoTodos")

describe('Pruebas en <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItems
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )

    test('should de mostrarse correctamente el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de llamar la función handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('should de llamar la función hanldeToggle', () => {
         wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('should de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text().trim() ).toBe(`${ 0 + 1 }. ${ demoTodos[0].desc}`)
    });

    test('should de tener la clase complete si el TODO.done esta en true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItems
                todo={todo}
            />
        )

        expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
    });

})
