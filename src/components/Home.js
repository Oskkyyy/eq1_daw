import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Descuentos from './Descuentos';
import Instrucciones from './Instrucciones';
import Carrusel from './Carrusel';
import Restaurantes from './Restaurantes';
import Platillos from './Platillos';
import Cards from './Cards';
import Footer from './Footer';
import Cart from './Cart';

function Home(){
    return(

        <div>
            <Navbar/>
            <Hero/> 
            <Descuentos/>
            <Instrucciones/>
            <Carrusel/>
            <Restaurantes/>
            <Platillos/>
            <Cards/>
            <Footer/>
            <Cart/>
        </div>
    );
}

export default Home;