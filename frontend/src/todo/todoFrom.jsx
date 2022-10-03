import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../template/iconButton';
import { changeDescription, search, add, clear } from './todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const { add, search, description } = this.props;

        return (
            <div role="form" className="todoForm">
                <div className="col-xs-12 col-sm-9 col-md-10">
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}
                    />
                </div>
                <div className="col-xs-12 col-sm-3 col-md-2">
                    <IconButton
                        style="primary"
                        icon="plus"
                        onClick={() => add(description)}
                    ></IconButton>
                    <IconButton
                        style="info"
                        icon="search"
                        onClick={search}
                    ></IconButton>
                    <IconButton
                        style="default"
                        icon="close"
                        onClick={this.props.clear}
                    ></IconButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ description: state.todo.description });
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ changeDescription, search, add, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
