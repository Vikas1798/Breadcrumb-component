import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NoDataFound from '../../Components/NoDataFound'
const ProductDetail = () => {
    const { id } = useParams();
    let PRODUCTS = (key) => `https://dummyjson.com/product/${key}`;

    const [state, setState] = useState({
        productDetail: {},
        load: false
    })

    useEffect(() => {
        const handleGetProductDetail = async () => {
            setState((prev) => {
                return {
                    ...prev,
                    load: true,
                };
            });
            try {
                await fetch(PRODUCTS(id))
                    .then((res) => res?.json())
                    .then((res) => {
                        setState((prev) => {
                            return {
                                ...prev,
                                productDetail: res ?? {},
                                load: false
                            }
                        })
                    });
            } catch (error) {
                setState((prev) => {
                    return {
                        ...prev,
                        load: false,
                    };
                });
            }
        };

        handleGetProductDetail();
    }, [])

    const { productDetail, load } = state;
    return (
        <section>
            {
                load ?
                    <section className='grid grid-cols-1 lg:grid-cols-[30%_70%] gap-5 my-10'>
                        <div className='w-full h-[200px] bg-gray-200 rounded-lg animate-pulse'></div>
                        <div className='w-full h-[200px] bg-gray-200 rounded-lg animate-pulse'></div>
                    </section>
                    :
                    Object.keys(productDetail)?.length !== 0 ?
                        <section className='grid grid-cols-1 lg:grid-cols-[30%_70%] gap-5 my-10'>
                            <figure>
                                <img className='rounded-lg object-cover' src={productDetail?.thumbnail} alt={productDetail?.title} />
                            </figure>
                            <section className='text-start bg-white p-5 border-1 border-gray-300 rounded-lg'>
                                <h1 className='text-md md:text-2xl font-bold'>{productDetail?.title}</h1>
                                <p className='text-lg'>{productDetail?.description}</p>
                                <div className='flex items-center'>
                                    <h6 className='text-lg font-semibold'> Category :</h6>
                                    <p className='capitalize text-lg text-[#4b8dff] rounded-full px-4  border border-gray-200 bg-white ms-1'>{productDetail?.category}</p>
                                </div>
                                <div className='flex items-center'>
                                    <h6 className='text-lg font-semibold'> Rating :</h6>
                                    <p className='capitalize text-lg text-[#fbcc31] ms-1'>{productDetail?.rating}</p>
                                </div>
                                <p className='text-lg font-semibold'>₹{productDetail?.price} <span className='text-[#388e3c] ms-2  underline'>{productDetail?.discountPercentage}% off</span></p>
                                <button className='bg-[#fe7678] text-white rounded-lg px-6 py-2 mt-4 hover:shadow-lg font-semibold' onClick={() => alert('Added to Cart..')}>Add to Cart</button>
                            </section>
                        </section>
                        :
                        <NoDataFound />
            }
        </section>
    )
}

export default ProductDetail;