import './App.css';
import Navbar from './component/Navbar';
import StudentList from './component/StudentList';
import StudentForm from './component/StudentForm';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<PrivateRoute><StudentForm /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
