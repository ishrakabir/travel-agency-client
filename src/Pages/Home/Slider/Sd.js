import React from 'react';
import { Carousel } from "@material-tailwind/react";
import Card from '../Card/Card';
const Sd = ({locations}) => {
   
    return (
        <Carousel className="rounded-xl">
            {
                locations.map(location=> <Card location={location} key={location.id}></Card>)
            }
        </Carousel>
    );
};

export default Sd;