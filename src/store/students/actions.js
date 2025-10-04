export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';

export const fetchStudentsRequest = () => (
    { type: FETCH_STUDENTS_REQUEST });

export const fetchStudentsSuccess = (students) => (
    { type: FETCH_STUDENTS_SUCCESS, payload: students });
export const fetchStudentsFailure = (error) => (
    { type: FETCH_STUDENTS_FAILURE, payload: error });

export const addStudentSuccess = (student) => (
    { type: ADD_STUDENT_SUCCESS, payload: student });
export const updateStudentSuccess = (student) => (
    { type: UPDATE_STUDENT_SUCCESS, payload: student });
export const deleteStudentSuccess = (id) => (
    { type: DELETE_STUDENT_SUCCESS, payload: id });
