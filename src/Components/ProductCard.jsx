import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ d }) => {
    const navigate = useNavigate();
    return (
        <main onClick={() => navigate(`/product/${d?.id}`)} key={d?.id} className='bg-white rounded-lg p-[20px] cursor-pointer hover:shadow-md border border-gray-200' >
            <img src={d?.thumbnail} alt={d?.title} className='w-full object-cover aspect-square rounded-md' />
            <p className='text-sm mt-2 font-bold'> {d?.title} </p>
            <p className='text-sm line-clamp-1'>{d?.description}</p>
            <p className='text-sm mt-2 '>₹{d?.price} <span className='text-[#388e3c] ms-2 font-semibold'>{d?.discountPercentage}% off</span></p>
        </main>
    )
}

export default ProductCard