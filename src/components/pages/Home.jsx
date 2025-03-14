import React from 'react';
import Header from './Header';
import ClientRouter from '../routers/ClientRouter';
import Footer from './Footer';

function Home(props) {
    return (
        <div>
            <Header/>
            <ClientRouter/>
            <Footer/>
        </div>

    );
}

export default Home;