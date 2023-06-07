import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {

    return(
        <div className='site-container'>
            <div className='title'>
                <h1>Enriquez Tables and Chairs</h1>
            </div>
            <div className='site-body'>
                <About />
                <Product />
                <Contact />
            </div>
            
        </div>
    )
}
export default Home