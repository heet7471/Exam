import React from 'react';
import logo from '../logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/auth/actions';

export default function Navbar() {
  const user = useSelector(s => s.auth.user);
  const isAuth = useSelector(s => s.auth.isAuthenticated);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    nav('/login');
  };

  return (
    <nav className="site-header navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-white d-flex align-items-center" to="/">
          <img src={"https://student.rnwmultimedia.com/assets/images/logo-white.png"} alt="StudentMS" className="nav-logo me-2" />
          <span className="visually-hidden">StudentMS</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link text-white" to="/">Students</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/add">Add Student</Link></li>
          </ul>
          <div className="d-flex align-items-center">
            {isAuth ? (
              <>
                <span className="me-3 text-white">Signed in as <strong>{user?.name}</strong></span>
                <button className="btn btn-light btn-sm" onClick={onLogout}>Logout</button>
              </>
            ) : (
              <Link className="btn btn-light btn-sm" to="/login">Sign In</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
