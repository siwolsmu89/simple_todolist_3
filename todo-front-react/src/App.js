import { Component } from 'react';
import { selectColorAction } from "./actions/colorActions";
import { addTodoAction, checkTodoAction, removeTodoAction } from "./actions/todoActions";
import { connect } from "react-redux";
import TodoTemplate from "./views/todo-template/TodoTemplate";
import Palette from "./views/palette/Palette";
import Form from "./views/form/Form";
import TodoItemList from "./views/todo-item-list/TodoItemList";
import { BrowserRouter } from 'react-router-dom';

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
                            colors={ colors }
                            onCreate={ (text, colorValue) => dispatch(addTodoAction(text, colorValue)) }
                        />
                    )}
                    todoList={(
                        <TodoItemList
                            todos={ todos }
                            onToggle={ id => dispatch(checkTodoAction(id)) }
                            onRemove={ id => dispatch(removeTodoAction(id)) }
                        />
                    )}
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
