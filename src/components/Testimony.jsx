import React from 'react';
import Data from '../data';

export default function Testimony() {
    console.log(Data);
    return (
        <div className='flex flex-wrap justify-center'>
            {Data.map((items, index) => (
                <div key={index} className='w-full md:w-1/3 p-4'>
                    <div className='bg-white shadow-lg rounded-lg overflow-hidden p-6'>
                        <p className='text-lg font-semibold'>{items.id}</p>
                        <p className='text-xl font-bold'>{items.first_name} {items.last_name}</p>
                        <img className='w-full h-48 object-cover mt-4 mb-4' src={items.image} alt={`${items.first_name} ${items.last_name}`} />
                        <p className='text-gray-600'>{items.email}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
