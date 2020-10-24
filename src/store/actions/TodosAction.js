import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED, SET_TODOLIST_FILTER } from '../types/types';

export const addTodo = title => {
    return {
        type: ADD_TASK,
        title: title,
    }
};

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TASK,
        id: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TASK,
        id: id
    }
}

export const editTodo = (id, title) => {
    return {
        type: EDIT_TASK,
        title: title,
        id: id
    }
};
