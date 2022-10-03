import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoFrom from './todoFrom';
import TodoList from './todoList';

export default (props) => {
    return (
        <div className="todo">
            <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
            <TodoFrom />
            <TodoList />
        </div>
    );
};
