import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import './estates.css';
const Estates = () => {
    const [estates, setEstates] = useState([]);
    useEffect(()=>{
        fetch('estates.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])
    return (
        
            <div className="mt-30 max-w-6xl mx-auto">
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-extrabold'>Featured Properties</h1>
                        <p className="mt-2 mb-5 text-gray-600">Browse our latest hot offers</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
                            {estates.map(estate=><div estate={estate} key={estate.id} className="card bg-base-100 shadow-sm p-5 estate hover-3d ">
                                <figure className=''>
                                    <img
                                    src={estate.image}
                                    alt="Shoes" className='w-full h-76 '/>
                                </figure>
                                <div className='p-6'>
                                    <div className="mt-5">
                                    <h2 className="font-bold text-xl">{estate.estate_title}</h2>
                                    <div className='flex gap-2 text-gray-600 my-2'>
                                        <p>{estate.bedrooms} BD</p>
                                        <p>|</p>
                                        <p>{estate.bathrooms} BA</p>
                                        <p>|</p>
                                        <p>{estate.area}</p>
                                    </div>
                                    <div className="details mt-5">
                                        <NavLink to={`/estate/${estate.id}`} className="text-gray-800 border p-2 rounded-lg">View Details</NavLink>
                                    </div>
                                </div>
                                </div>
                                </div>)}
                        </div>
                   
                    </div>
       
    );
};

export default Estates;