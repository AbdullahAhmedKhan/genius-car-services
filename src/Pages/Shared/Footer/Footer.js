import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark'>
            <footer className='text-secondary text-center'>
                <p className='m-0 p-3'><small> &copy; copyright by | Abdullah {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;