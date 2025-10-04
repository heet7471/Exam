import {
    FETCH_STUDENTS_REQUEST,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILURE,
    ADD_STUDENT_SUCCESS,
    UPDATE_STUDENT_SUCCESS,
    DELETE_STUDENT_SUCCESS,
} from './actions';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export function studentsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_STUDENTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_STUDENTS_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case FETCH_STUDENTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ADD_STUDENT_SUCCESS:
            return { ...state, items: [...state.items, action.payload] };
        case UPDATE_STUDENT_SUCCESS:
            return { ...state, items: state.items.map(s => s.id === action.payload.id ? action.payload : s) };
        case DELETE_STUDENT_SUCCESS:
            return { ...state, items: state.items.filter(s => s.id !== action.payload) };
        default:
            return state;
    }
}
