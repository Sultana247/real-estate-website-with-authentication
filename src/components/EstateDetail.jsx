import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import 'animate.css';
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'

import { Marker, Popup } from 'leaflet';

const EstateDetail = () => {
    const data = useLoaderData();
    const id = useParams();
    const idInt=parseInt(id.id);
    const estateDetail = data.filter(estate=> estate.id === idInt);
    const estate = estateDetail[0];
    const {estate_title, price, description, image, facilities, location} = estate;
    useEffect(()=>{
        document.title = `Real Estate Website | ${estate_title}`;
    },[estate_title])

    return (
        <div className=''>
            {/* banner */}
             
            <img src={image} alt="" className='relative w-full h-screen '/>
           <h2 className='absolute lg:text-6xl text-4xl font-bold top-80 left-10 lg:left-[400px] text-white  text-center z-5 animate__jello'>{estate_title}</h2>
            <div className='max-w-6xl mx-auto mt-15 flex justify-center items-center p-5'>
               <div>
                    
                    <p className='text-2xl font-semibold text-green-600 mb-4'>Price: {price}</p>
                    <p className='text-gray-700 max-w-2xl'>{description}</p>
                    <h2 className='text-4xl font-bold my-4'>Amenities</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        {facilities.map(facility=><div className='text-lg rounded-lg p-3 border border-base-200 bg-base-200'>{facility}</div>)}
                    </div>
                    <h2 className='text-4xl font-bold my-4 animate__heartBeat'>Explore the Area</h2>
                    <p>{location}</p>
               </div>
            </div>
        </div>
    );
};

export default EstateDetail;