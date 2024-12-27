import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../comm-assets/Logo/logo.svg';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const dropdownMenus = [
    {
      title: 'Communities',
      items: [
        { label: 'Discover Communities', path: '/communities/discover' },
        { label: 'Create a Community', path: '/communities/create' },
        { label: 'Manage Communities', path: '/communities/manage' }
      ]
    },
    {
      title: 'Events', 
      items: [
        { label: 'Upcoming Events', path: '/events/upcoming' },
        { label: 'Create Event', path: '/create-event' }
      ]
    },
    {
      title: 'Support',
      items: [
        { label: 'Help Center', path: '/support/help' },
        { label: 'Contact Us', path: '/support/contact' },
        { 
          label: 'FAQ',
          path: './FAQ',
          onClick: (e) => {
            e.preventDefault();
            document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
          }
        }
      ]
    }
  ];

  const handleDropdownClick = (menu, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleNavigation = (path, e) => {
    e.preventDefault();
    navigate(path);
    setActiveDropdown(null);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <nav 
      className="flex justify-between items-center fixed w-100 top-0 z-999"
      style={{
        height: '76px',
        padding: '20px',
        maxWidth: '1519.2px',
        margin: '0 auto',
        backgroundColor: 'var(--color-background-white)'
      }}
    >
      <div className="flex items-center">
        <a href="/" onClick={(e) => handleNavigation('/', e)}>
          <span className="flex flex-column-2 items-center" >
            <img src={logo} alt="Communion Logo" className="h2 logo" />
            <h2 className="title">Communion</h2>
          </span>
        </a>
      </div>
      
      <div className="dn db-l flex items-center">
        <div className="flex items-center">
          <a 
            href="/"
            onClick={(e) => handleNavigation('/', e)}
            className="link ph3" 
            style={{ color: 'var(--color-button-darkgrey)' }}
          >
            Home
          </a>

          {dropdownMenus.map((menu) => (
            <div key={menu.title} className="relative ph3">
              <button 
                className="link bn bg-transparent pointer"
                style={{ color: 'var(--color-button-darkgrey)' }}
                onClick={(e) => handleDropdownClick(menu.title, e)}
                aria-expanded={activeDropdown === menu.title}
              >
                {menu.title}
              </button>
              {activeDropdown === menu.title && (
                <div 
                  className="absolute left-0 mt2 bg-white br2 shadow-5"
                  style={{ 
                    minWidth: '200px',
                    border: '1px solid var(--color-border-lightgrey)'
                  }}
                >
                  {menu.items.map((item) => (
                    <Link 
                      key={item.label}
                      to={item.path}
                      onClick={() => setActiveDropdown(null)}
                      className="db pa3 link hover-bg-near-white pointer"
                      style={{ color: 'var(--color-button-darkgrey)' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="ml5">
            <a 
              href="/profile"
              onClick={(e) => handleNavigation('/profile', e)}
              className="link ph3" 
              style={{ color: 'var(--color-button-darkgrey)' }}
            >
              Profile
            </a>
          </div>
        </div>
      </div>

      <button 
        className="access-btn"
        onClick={(e) => handleNavigation('/access', e)}
      >
        Get Access
      </button>
    </nav>
  );
};

export default Navbar;