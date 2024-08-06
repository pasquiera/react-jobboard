import './NavBar.css';
import { Link, useLocation  } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const isActive = (paths) => {
    return paths.includes(location.pathname);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
      <li className="navbar-item"><Link to="/job-list" className={isActive(['/job-list', '/']) ? 'active' : ''}>Job Search</Link></li>
      <li className="navbar-item"><Link to="/add-job" className={isActive(['/add-job']) ? 'active' : ''}>Add Job</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;