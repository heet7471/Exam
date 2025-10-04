import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, updateStudent } from '../store/students/thunks';

export default function StudentDetails({ student }) {
  const dispatch = useDispatch();
  const isAuth = useSelector(s => s.auth.isAuthenticated);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: student.name, roll: student.roll, class: student.class, school: student.school || '' });

  const save = async () => {
    await dispatch(updateStudent(student.id, { ...student, ...form, school: form.school }));
    setEditing(false);
  };

  const remove = async () => {
    if (window.confirm('Delete this student?')) await dispatch(deleteStudent(student.id));
  };

  return (
    <div className="card student-card">
      <div className="card-body">
        {!editing ? (
          <div className="d-flex justify-content-between align-items-start">
            <div className="d-flex gap-3 align-items-center">
              <div className="avatar">{(student.name || 'U').split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase()}</div>
              <div>
                <h5 className="card-title mb-1">{student.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Roll: {student.roll}</h6>
                <div className="mb-1">
                  <span className="badge bg-light text-dark me-2">Class: {student.class}</span>
                  <span className="small-muted">School: <strong>{student.school || 'No school'}</strong></span>
                </div>
              </div>
            </div>
            {isAuth && (
              <div className="d-flex flex-column align-items-end">
                <button className="btn btn-sm btn-primary mb-2" onClick={()=>setEditing(true)}>Edit</button>
                <button className="btn btn-sm btn-outline-danger" onClick={remove}>Delete</button>
              </div>
            )}
          </div>
        ) : (
          <div className="center-card">
            <div className="mb-2">
              <input className="form-control mb-2" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
              <input className="form-control mb-2" value={form.roll} onChange={e=>setForm({...form, roll: e.target.value})} />
              <input className="form-control mb-2" value={form.class} onChange={e=>setForm({...form, class: e.target.value})} />
              <input className="form-control mb-2" placeholder="School" value={form.school} onChange={e=>setForm({...form, school: e.target.value})} />
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-success" onClick={save}>Save</button>
              <button className="btn btn-sm btn-secondary" onClick={()=>setEditing(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
