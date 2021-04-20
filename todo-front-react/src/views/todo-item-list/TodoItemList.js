import {Component} from "react";
import TodoItem from "./todo-item/TodoItem";

class  TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, colorValue, checked }) => (
                <TodoItem
                    key={ id }
                    id={ id }
                    text={ text }
                    colorValue={ colorValue }
                    checked={ checked }
                    onToggle={ onToggle }
                    onRemove={ onRemove }
                />
            )
        );

        return (
            <div>
                { todoList }
            </div>
        );
    }
}

export default TodoItemList;