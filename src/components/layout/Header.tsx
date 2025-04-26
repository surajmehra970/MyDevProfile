import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Container from './Container';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    className="px-4 py-2 text-base font-medium cursor-pointer hover:text-primary dark:hover:text-primary transition-colors"
    activeClass="text-primary dark:text-primary"
    onClick={onClick}
  >
    {children}
  </Link>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            Suraj<span className="text-dark dark:text-white">Mehra</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark shadow-lg"
        >
          <div className="flex flex-col py-4">
            <NavLink to="home" onClick={closeMenu}>Home</NavLink>
            <NavLink to="about" onClick={closeMenu}>About</NavLink>
            <NavLink to="projects" onClick={closeMenu}>Projects</NavLink>
            <NavLink to="services" onClick={closeMenu}>Services</NavLink>
            <NavLink to="contact" onClick={closeMenu}>Contact</NavLink>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 