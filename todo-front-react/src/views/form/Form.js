import {Component} from "react";
import './Form.css';

class Form extends Component {

    render() {
        const { colors, onCreate } = this.props;
        let input;
        const activeColorIndex = colors.findIndex(color => color.active === true );
        const activeColorValue = colors[activeColorIndex].colorValue;

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                const text = input.value;
                onCreate(text, activeColorValue)
            }
        };

        return (
            <div className="form">
                <input ref={ node => { input = node } } onKeyPress={ handleKeyPress }/>
                <div className="create-button"
                    onClick={ () => {
                    const text = input.value;
                    onCreate(text, activeColorValue);
                    input.value = '';
                } }>
                    추가
                </div>
            </div>
        );
    }
}

export default Form;