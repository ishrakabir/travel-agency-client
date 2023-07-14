import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ location }) => {
    const { name, img, description } = location
    return (
        <div>
            <div className='flex lg:flex-row flex-col  mb-20 '>
                <div className='flex-auto text-center lg:w-64 mb-5 lg:mb-0 xl:mt-20 lg:text-left lg:px-40 transition duration-300 ease-in-out hover:scale-110 '>
                    <h1 className='text-2xl lg:text-4xl xl:text-6xl font-bold '>{name}</h1>
                    <h4 className='text-xs lg:text-xl lg:pe-20 lg:mt-4 font-thin'>{description}</h4>
                    <Link to="/hotels">
                        <Button className=" mt-3 bg-yellow-800 text-black font-extrabold">
                            <span className='flex space-x-4 items-center'>Booking
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="lg:h-8 lg:w-8 h-4 w-4">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </span>
                        </Button>
                    </Link>
                </div>
                <div className=' flex-auto lg:w-20 '>

                    <div className='relative transition duration-300  ease-in-out hover:scale-110'>
                        <img
                            src={img}
                            alt=""
                            className=" rounded-lg object-cover h-64 md:h-96 w-full   "
                        />
                        <h1 className='absolute bottom-10 left-3 text-xl md:text-3xl font-semibold '>{name}</h1>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Card;