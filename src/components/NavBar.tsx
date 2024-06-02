import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'current-page' : ''}>Issues</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'current-page' : ''}>About</NavLink></li>
        <li><NavLink to="/submissions" className={({ isActive }) => isActive ? 'current-page' : ''}>Submissions</NavLink></li>
        <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'current-page' : ''}>FAQ</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'current-page' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
