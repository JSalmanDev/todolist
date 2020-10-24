import { todolistFilters } from "../actions/TodosAction";
import { SET_TODOLIST_FILTER } from '../types/types';

const todolistFilter = (state=todolistFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case SET_TODOLIST_FILTER:
            return action.filter;
        default: return state;    
    }
}

export default todolistFilter;
