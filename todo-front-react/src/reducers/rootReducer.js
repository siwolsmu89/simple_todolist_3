import { todos } from './todoReducer';
import { colors } from './colorReducer';

const initialState = {
    todos : [ {id: -1, text: '데이터를 불러오는 중...', colorValue:'#f03e3e', checked: false }],
    colors : [
        { id: 0, colorValue: '#343a40', active: true },
        { id: 1, colorValue: '#f03e3e', active: false },
        { id: 2, colorValue: '#228ae6', active: false },
        { id: 3, colorValue: '#12b886', active: false }
    ]
};


export default function rootReducer (state = initialState, action) {
    return {
        todos: todos(state, action),
        colors: colors(state, action)
    };
};