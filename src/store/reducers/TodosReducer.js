import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from '../types/types';

const initialState = { 
    todos : []
};

function getId(state) {
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return Object.assign({}, state, {
                todos: [
                    {
                        title: action.title,
                        completed: false,
                        updated: false,
                        id: getId(state)
                    }, 
                    ...state.todos
                ]
            })
        case COMPLETE_TASK:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                return todo.id === action.id ?
                Object.assign({}, todo, {updated: false, completed: ! 
                todo.completed}) : todo
                })
            })
        case EDIT_TASK:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                return todo.id === action.id ?
                Object.assign({}, todo, {updated: true, title: action.title }) : todo
                })
            })
        case DELETE_TASK:
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.id
                })
            })
        default:
            return state;
    }
}

export default reducer;
