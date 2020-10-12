import React from 'react';
import Navbar from '../Navbar/Navbar';
import Bannar from './Bannar';
import VolunterCard from './VolunterCard';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Bannar></Bannar>
            <VolunterCard></VolunterCard>
            
        </div>
    );
};

export default Home;