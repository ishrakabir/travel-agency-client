import React from 'react';
import Sd from './Slider/Sd';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const locations = useLoaderData();
    // console.log(locations);
    return (
        <div className='flex lg:mt-40 mx-10'>
       
            
               <Sd locations={locations}></Sd>
                

        </div>
    );
};

export default Home;