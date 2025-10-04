import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../store/students/thunks';
import StudentDetails from './StudentDetails.jsx';

export default function StudentList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(s => s.students);
  const [filterClass, setFilterClass] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [search, setSearch] = useState('');

  useEffect(() => { dispatch(fetchStudents()); }, [dispatch]);

  const filtered = items
    .filter(s => (!filterClass || s.class === filterClass))
    .filter(s => (!search || s.name.toLowerCase().includes(search.toLowerCase())))
    .sort((a,b) => (sortBy === 'name' ? a.name.localeCompare(b.name) : a.roll - b.roll));

  return (
    <div className="main-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Students</h2>
          <div className="d-flex gap-2 align-items-center">
            <div className="input-group">
              <input className="form-control" placeholder="Search by name" value={search} onChange={e=>setSearch(e.target.value)} />
              <button className="btn btn-outline-secondary" onClick={()=>setSearch('')}>Clear</button>
            </div>
            <select value={sortBy} onChange={e=>setSortBy(e.target.value)} className="form-select w-auto">
              <option value="name">Sort: Name</option>
              <option value="roll">Sort: Roll</option>
            </select>
            <input className="form-control w-auto" placeholder="Filter by class" value={filterClass} onChange={e=>setFilterClass(e.target.value)} />
          </div>
        </div>

        {loading && <div className="text-center py-4">Loading...</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row gy-3">
          {filtered.map(s => (
            <div className="col-12 col-md-6" key={s.id}>
              <StudentDetails student={s} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
