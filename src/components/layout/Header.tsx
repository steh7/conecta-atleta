import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
          <div className="bg-gradient-energy p-2 rounded">
          <span className="text-2xl font-bold text-white">ConectAtleta</span>
        </div>

          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/descobrir" className="text-gray-600 hover:text-primary-color transition-colors">
            Descobrir
          </Link>
          <Link to="/atletas" className="text-gray-600 hover:text-secondary-color transition-colors">
            Atletas
          </Link>
          <Link to="/patrocinadores" className="text-gray-600 hover:text-accent-color transition-colors">
            Patrocinadores
          </Link>
          <Link to="/sobre" className="text-gray-600 hover:text-green transition-colors">
            Sobre
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login" className="px-4 py-2 text-primary-color font-medium hover:text-primary-hover transition-colors">
            Entrar
          </Link>
          <Link to="/cadastro" className="px-6 py-2 bg-gradient-energy text-white rounded-md font-medium hover:shadow-lg transition-all">
            Cadastre-se
          </Link>
          
          {/* Menu mobile */}
          <button 
            className="md:hidden text-gray-600 hover:text-accent-color focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link 
              to="/descobrir" 
              className="text-gray-600 hover:text-primary-color transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Descobrir
            </Link>
            <Link 
              to="/atletas" 
              className="text-gray-600 hover:text-secondary-color transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Atletas
            </Link>
            <Link 
              to="/patrocinadores" 
              className="text-gray-600 hover:text-accent-color transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Patrocinadores
            </Link>
            <Link 
              to="/sobre" 
              className="text-gray-600 hover:text-green transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
