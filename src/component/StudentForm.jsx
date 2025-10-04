import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../store/students/thunks';
import { useNavigate } from 'react-router-dom';

export default function StudentForm() {
  const [form, setForm] = useState({ name: '', roll: '', class: '', school: '' });
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.roll) return alert('Name and roll required');
    await dispatch(addStudent({ ...form, roll: Number(form.roll), school: form.school }));
    nav('/');
  };

  return (
    <div className="container mt-4">
      <div className="card center-card">
        <div className="card-body">
          <h3 className="card-title">Add Student</h3>
          <form onSubmit={submit}>
            <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
            <input className="form-control mb-2" placeholder="Roll" value={form.roll} onChange={e=>setForm({...form, roll: e.target.value})} />
            <input className="form-control mb-2" placeholder="Class" value={form.class} onChange={e=>setForm({...form, class: e.target.value})} />
            <input className="form-control mb-2" placeholder="School" value={form.school} onChange={e=>setForm({...form, school: e.target.value})} />
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" type="submit">Add Student</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
