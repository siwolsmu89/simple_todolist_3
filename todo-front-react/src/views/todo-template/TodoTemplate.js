import {Component} from "react";
import './TodoTemplate.css';

class TodoTemplate extends Component {
    render() {
        const { palette, form, todoList } = this.props;
        return (
            <main className="todo-list-template">
                <div className="title">
                    오늘 할 일
                </div>
                <section className="palette-wrapper">
                    { palette }
                </section>
                <section className="form-wrapper">
                    { form }
                </section>
                <section className="todos-wrapper">
                    { todoList }
                </section>
            </main>
        );
    }
}

export default TodoTemplate;