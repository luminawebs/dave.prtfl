import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { trackMenuClick } from '../utils/analytics';

const MinimalistMenu = () => {
  const { getLocalizedPath } = useLanguage();
  
  // Handle menu click tracking
  const handleMenuClick = (menuItem, section = 'minimalist_navigation') => {
    trackMenuClick(menuItem, section);
  };

  return (
    <nav id="navmenu" className="navmenu minimalist-nav">
      <ul>
        <li>
          <Link
            to={getLocalizedPath('/')}
            onClick={() => handleMenuClick('Home', 'minimalist_navigation')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('/resources')}
            onClick={() => handleMenuClick('Resources', 'minimalist_navigation')}
          >
            Recursos
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('/courses')}
            onClick={() => handleMenuClick('Courses', 'minimalist_navigation')}
          >
            Courses
          </Link>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handleMenuClick('Contact', 'minimalist_navigation')}
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MinimalistMenu;

