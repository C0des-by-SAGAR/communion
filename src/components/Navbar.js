import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../comm-assets/Logo/logo.svg';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const dropdownMenus = [
    {
      title: 'Communities',
      items: [
        { label: 'Discover Communities', path: '/discover-communities' },
        { label: 'Create a Community', path: '/create-community' },
        { label: 'My Communities', path: '/my-communities' },
      ],
    },
    {
      title: 'Events',
      items: [
        { label: 'Upcoming Events', path: '/upcoming-events' },
        { label: 'Create Event', path: '/create-event' },
      ],
    },
    {
      title: 'Leaders',
      items: [
        { label: 'View Leaders', path: '/view-leaders' },
        { label: 'Add A Leader', path: '/add-leader' },
      ],
    },
    {
      title: 'Support',
      items: [
        { label: 'Help Center', path: '/support/help' },
        { label: 'Contact Us', path: '/support/contact' },
      ],
    },
  ];

  const handleDropdownClick = (menu, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleNavigation = (path, e) => {
    e.preventDefault();
    navigate(path);
    setActiveDropdown(null);
    setMenuOpen(false); // Close menu on navigation
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" onClick={(e) => handleNavigation('/', e)}>
          <span className="logo-container">
            <img src={logo} alt="Communion Logo" className="logo" />
            <h2 className="title">Communion</h2>
          </span>
        </a>
        <div className="nav-right">
          <button
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className={`menu ${menuOpen ? 'open' : ''}`}>
            <a
              href="/"
              onClick={(e) => handleNavigation('/', e)}
              className="menu-item"
            >
              Home
            </a>
            {dropdownMenus.map((menu) => (
              <div key={menu.title} className="dropdown">
                <button
                  className="dropdown-btn"
                  onClick={(e) => handleDropdownClick(menu.title, e)}
                  aria-expanded={activeDropdown === menu.title}
                >
                  {menu.title} <FaChevronDown />
                </button>
                {activeDropdown === menu.title && (
                  <div className="dropdown-menu">
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className="dropdown-item"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/profile"
              onClick={(e) => handleNavigation('/profile', e)}
              className="menu-item"
            >
              Profile
            </a>
          </div>
          <button
            className="access-btn"
            onClick={(e) => handleNavigation('/access', e)}
          >
            Get Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
