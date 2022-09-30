import React, { Component } from 'react';
import Axios from 'axios';
import PageHeader from '../template/pageHeader';
import TodoFrom from './todoFrom';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        // this.markAsDoneOrNot = this.markAsDoneOrNot.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    refresh(description = '') {
        const search = description
            ? `&description__regex=/${description}/i`
            : '';
        Axios.get(`${URL}?sort=-createdAt${search}`).then((res) =>
            this.setState({ ...this.state, description, list: res.data })
        );
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleClear() {
        this.refresh();
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleAdd() {
        const description = this.state.description;
        Axios.post(URL, { description }).then((res) => this.refresh());
    }

    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`).then((res) =>
            this.refresh(this.state.description)
        );
    }

    handleMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then((res) =>
            this.refresh(this.state.description)
        );
    }

    handleMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then((res) =>
            this.refresh(this.state.description)
        );
    }

    // markAsDoneOrNot(todo) {
    //     Axios.put(`${URL}/${todo._id}`, { ...todo, done: !todo.done }).then(
    //         (res) => this.refresh()
    //     );
    // }       o problema aqui é que ele marca e desmarca dentro de qualquer dos botões, se fosse checkbox talvez fosse uma boa

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoFrom
                    desccription={this.state.desccription}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    // markAsDoneOrNot={this.markAsDoneOrNot}
                    handleRemove={this.handleRemove}
                />
            </div>
        );
    }
}
