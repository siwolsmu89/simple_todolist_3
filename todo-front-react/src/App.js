import { Component } from 'react';
import { selectColorAction } from "./actions/colorActions";
import {addTodoAction, checkTodoAction, getTodoAction, removeTodoAction} from "./actions/todoActions";
import { connect } from "react-redux";
import TodoTemplate from "./views/todo-template/TodoTemplate";
import Palette from "./views/palette/Palette";
import Form from "./views/form/Form";
import TodoItemList from "./views/todo-item-list/TodoItemList";
import axios from "axios";

class App extends Component {
    render() {
        const { dispatch, todos, colors } = this.props;
        return (
            <div>
                <TodoTemplate
                    palette={(
                        <Palette
                            colors={ colors }
                            onSelect={ colorValue => dispatch(selectColorAction(colorValue)) }
                        />
                    )}
                    form={(
                        <Form
                            todos={ todos }
                            colors={ colors }
                            onCreate={ (nextId, text, colorValue) => {
                                axios({
                                    url: 'todo/add.do',
                                    method: 'post',
                                    dataType: 'json',
                                    data: { id: nextId, text, colorValue },
                                }).then(dispatch(addTodoAction(nextId, text, colorValue)))
                            } }
                        />
                    )}
                    todoList={(
                        <TodoItemList
                            todos={ todos }
                            onToggle={ id => {
                                axios({
                                    url: 'todo/check.do',
                                    method: 'post',
                                    dataType: 'json',
                                    data: { id }
                                }).then(dispatch(checkTodoAction(id)))
                            } }
                            onRemove={ id => dispatch(removeTodoAction(id)) }
                        />
                    )}
                    getList={ () => {
                        axios.get('todo/getList.do')
                        .then((res) => dispatch(getTodoAction(res.data)))
                    } }
                />
            </div>
        );
    }
}

function selector(state) {
    const { todos, colors } = state;
    return { todos, colors };
}

export default connect(selector)(App);
