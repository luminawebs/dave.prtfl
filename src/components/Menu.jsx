import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { trackMenuClick } from '../utils/analytics';

const Menu = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();

  // Handle menu click tracking
  const handleMenuClick = (menuItem, section = 'main_navigation') => {
    trackMenuClick(menuItem, section);
  };

  // Handle dropdown toggle for mobile
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const dropdown = e.target.closest('.dropdown');
    const dropdownMenu = dropdown.querySelector('ul');

    // Toggle active class on parent
    dropdown.classList.toggle('active');
    // Toggle dropdown-active class on submenu
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('dropdown-active');
    }
  };

  // Handle mobile nav toggle
  const handleMobileNavToggle = () => {
    const body = document.querySelector('body');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

    body.classList.toggle('mobile-nav-active');
    mobileNavToggle.classList.toggle('bi-list');
    mobileNavToggle.classList.toggle('bi-x');
  };

  // Close mobile nav when clicking on menu items
  const handleNavItemClick = (menuItem, section) => {
    handleMenuClick(menuItem, section);

    // Close mobile menu if open
    const body = document.querySelector('body');
    if (body.classList.contains('mobile-nav-active')) {
      handleMobileNavToggle();
    }
  };

  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        {/*<li className="dropdown">
          <Link
            to="/"
            onClick={() => handleNavItemClick('Home', 'main_navigation')}
          >
            {t('nav.home')}
            <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropdownToggle}></i>
          </Link>
          <ul>
             <li>
              <a
                href="#about"
                onClick={() => handleNavItemClick('Nosotros', 'home_dropdown')}
              >
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => handleNavItemClick('Soluciones', 'home_dropdown')}
              >
                {t('nav.solutions')}
              </a>
            </li> 
            <li>
              <a
                href="#contact"
                onClick={() => handleNavItemClick('Contacto', 'home_dropdown')}
              >
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </li>*/}


        <li><Link
          to={getLocalizedPath('/')}
          onClick={() => handleNavItemClick('Home', 'main_navigation')}
        >
          {t('nav.home')}
        </Link></li>
        {/*
        <li className="dropdown">
          <Link
            to={getLocalizedPath('/personajes3d')}
            onClick={() => handleNavItemClick('Avatars 3D', 'main_navigation')}
          >
            {t('nav.avatars3d')}
            <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropdownToggle}></i>
          </Link>
          <ul>
            <li>
              <Link
                to={getLocalizedPath('/personajes3d#pricing')}
                onClick={() => handleNavItemClick('Planes', 'avatars_dropdown')}
              >
                {t('nav.plans')}
              </Link>
            </li>
          </ul>
        </li>
        
        <li>
          <Link
            to={getLocalizedPath('/courses')}
            onClick={() => handleNavItemClick('Courses', 'main_navigation')}
          >
            {t('nav.courses') ?? 'Courses'}
          </Link>
        </li>
         <li>
          <Link
            to={getLocalizedPath('/lmspricing')}
            onClick={() => handleNavItemClick('LMS SaaS', 'main_navigation')}
          >
            {t('nav.lmsSaas')}
          </Link>
        </li> */}
        <li>
          <Link
            to={getLocalizedPath('/experience')}
            onClick={() => handleNavItemClick('Experience', 'main_navigation')}
          >
            {t('nav.experience')}
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('/portfolio')}
            onClick={() => handleNavItemClick('Portfolio', 'main_navigation')}
          >
            {t('nav.portfolio')}
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('/blog')}
            onClick={() => handleNavItemClick('Blog', 'main_navigation')}
          >
            {t('nav.blog') ?? 'Blog'}
          </Link>
        </li>
      </ul>
      <i
        className="mobile-nav-toggle d-xl-none bi bi-list"
        onClick={handleMobileNavToggle}
      ></i>
    </nav>
  );
};

export default Menu;
