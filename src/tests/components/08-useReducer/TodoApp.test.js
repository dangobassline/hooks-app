import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';
import { demoTodos } from '../fixtures/demoTodos';
const { TodoApp } = require("../../../components/08-useReducer/TodoApp")

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow(
        <TodoApp
        />
    );

    Storage.prototype.setItem = jest.fn();

    test('should de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de agregar un TODO', () => {
        const wrapper = mount( <TodoApp /> );
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp  = 2');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    });

    test('should de eliminar un TODO', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp  = 0');
    });
});
