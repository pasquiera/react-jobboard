import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AddJobPage from './pages/AddJobPage/AddJobPage';
import JobListPage from './pages/JobListPage/JobListPage';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/job-list"  element={<JobListPage />} />
            <Route path="/add-job"  element={<AddJobPage />} />
            <Route path="/" element={<JobListPage />} />
            <Route path="*" element={<Navigate to="/job-list" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
