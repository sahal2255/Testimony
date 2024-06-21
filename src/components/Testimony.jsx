import React,{useState}  from 'react';
import Data from '../data';

export default function Testimony() {
    const [currentIndex,setCurrentIndex] = useState(0)

    const handleNext=()=>{
        if(currentIndex<Data.length-1){
            setCurrentIndex(currentIndex+1)
        }
        else{
            setCurrentIndex(0)
        }
    }
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        else{
            setCurrentIndex(Data.length-1)
        }
        
    };
    return (
        <div className='flex flex-wrap justify-center'>
                <div className='w-full md:w-1/3 p-4'>
                {Data.map((item, index) => (
                index === currentIndex && (
                    <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden p-6'>
                        {/* <p className='text-lg font-semibold'>{item.id}</p> */}
                        <p className='text-xl font-bold'>{item.first_name} {item.last_name}</p>
                        <img className='w-full h-48 object-cover mt-4 mb-4' src={item.image} alt={`${item.first_name} ${item.last_name}`} />
                        <p className='text-gray-600'>{item.email}</p>
                    </div>
                )
            ))}

                    <div className='flex justify-between mt-4'>
                        <button onClick={handlePrev} className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Previous</button>
                        <button onClick={handleNext} className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-4'>Next</button>
                    </div>
                </div>
            <div >

            </div>
        </div>
    );
}
