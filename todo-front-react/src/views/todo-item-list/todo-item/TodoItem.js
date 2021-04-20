import {Component} from "react";
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { id, text, colorValue, checked, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" id={ id } onClick={ () => onToggle(id) }>
                <div className="remove" onClick={ (e) => {
                e.stopPropagation();
                onRemove(id); } }
                >&times;</div>
                <div className={`todo-text ${checked ? 'checked' : '' }`}>
                    <div style={ { color: colorValue } }> { text } </div>
                </div>
                <div>
                    {
                        checked && (<div className="check-mark">&#x2713;</div>)
                    }
                </div>
            </div>
        );
    }
}

export default TodoItem;