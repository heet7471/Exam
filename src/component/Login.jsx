import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth/actions';
import { useNavigate } from 'react-router-dom';

// NOTE: This is a mock authentication for demo purposes.
// Username can be any non-empty value; password must match the mocked secret below.
const MOCK_PASSWORD = 'admin123';

export default function Login() {
  const [name, setName] = useState('admin');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) return setError('Username is required');
    if (!password) return setError('Password is required');
    if (password !== MOCK_PASSWORD) return setError('Invalid username or password');

    dispatch(login({ name }));
    nav('/');
  };

  return (
    <div className="container mt-4">
      <div className="card center-card">
        <div className="card-body">
          <h3 className="card-title">Sign In</h3>
          <form onSubmit={submit}>
            <input className="form-control mb-2" placeholder="Username" value={name} onChange={e=>setName(e.target.value)} />
            <input className="form-control mb-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            {error && <div className="text-danger mb-2">{error}</div>}
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <div className="mt-3 text-muted small">Demo credentials: username any / password <code>admin123</code></div>
        </div>
      </div>
    </div>
  );
}
