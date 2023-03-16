import React, { useState } from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Nav from './Nav';
import Footer from './footer';

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div id="pagecontainer" className='row p-0'>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    );
}