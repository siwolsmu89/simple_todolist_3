export const ADD_TODO = 'ADD_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const GET_TODO = 'GET_TODO';

export function addTodoAction(id, text, colorValue) {
    return { type: ADD_TODO, id, text, colorValue }
}

export function checkTodoAction(id) {
    return { type: CHECK_TODO, id }
}

export function removeTodoAction(id) {
    return { type: REMOVE_TODO, id }
}

export function getTodoAction(todos) {
    return { type: GET_TODO, todos }
}