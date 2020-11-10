import React from 'react';
const { shallow } = require("enzyme");
const { TodoList } = require("../../../components/08-useReducer/TodoList");
const { demoTodos } = require("../fixtures/demoTodos");

describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test('should de mostrarse correctamente el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de tener dos <TodoListItems />', () => {
        expect(wrapper.find('TodoListItems').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItems').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });

});
