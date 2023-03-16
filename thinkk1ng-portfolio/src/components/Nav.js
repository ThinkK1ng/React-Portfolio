import React from 'react';
import Header from "./Header";

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <header id='header-nav' className='col'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container-fluid position-relative flex-lg-column vh-100'>
        <Header />
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav flex-column'>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
    );
}