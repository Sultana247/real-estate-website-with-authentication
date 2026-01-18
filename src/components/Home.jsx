import React from 'react';
import Banner from './Banner';

import { NavLink} from 'react-router';
import Estates from './Estates';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
           <Estates></Estates>
           
        </div>
    );
};

export default Home;