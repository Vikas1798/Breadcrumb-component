import React from 'react'
import noDataFound from '../Assets/Image/no-data-found.png';

const NoDataFound = () => {
    return (
        <figure className='w-[40%]  mx-auto  my-5'>
            <img src={noDataFound} alt="No Data" className='rounded-lg' />
            <h6 className='text-[#fd8274] flex justify-center text-md md:text-2xl py-10 font-bold'> it's empty here </h6>
        </figure>
    )
}

export default NoDataFound