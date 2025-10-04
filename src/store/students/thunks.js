import axios from 'axios';
import {
  fetchStudentsRequest,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudentSuccess,
  updateStudentSuccess,
  deleteStudentSuccess,
} from './actions';

const API = 'http://localhost:5000/students';

export const fetchStudents = () => async (dispatch) => {
  dispatch(fetchStudentsRequest());
  try {
    const res = await axios.get(API);
    dispatch(fetchStudentsSuccess(res.data));
  } catch (err) {
    dispatch(fetchStudentsFailure(err.message || 'Fetch failed'));
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    const res = await axios.post(API, student);
    dispatch(addStudentSuccess(res.data));
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    const res = await axios.put(`${API}/${id}`, student);
    dispatch(updateStudentSuccess(res.data));
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API}/${id}`);
    dispatch(deleteStudentSuccess(id));
  } catch (err) {
    throw err;
  }
};
