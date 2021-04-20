import { todos } from './todoReducer';
import { colors } from './colorReducer';

const initialState = {
    todos : [
        { id: 0, text: '리액트 복습', checked: true, colorValue: '#228ae6' },
        { id: 1, text: '리덕스 복습', checked: true, colorValue: '#f03e3e' },
        { id: 2, text: '스프링 연동', checked: false, colorValue: '#12b886' }
    ],
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