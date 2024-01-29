import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CardsLoading from '../../Components/CardsLoading';
import ProductCard from '../../Components/ProductCard';
import NoDataFound from '../../Components/NoDataFound';

const Home = () => {
    let PRODUCTS = 'https://dummyjson.com/product';
    const navigate = useNavigate();

    const [state, setState] = useState({
        products: [],
        load: false
    })

    useEffect(() => {
        const handleGetProducts = async () => {
            setState((prev) => {
                return {
                    ...prev,
                    load: true,
                };
            });
            try {
                await fetch(PRODUCTS)
                    .then((res) => res?.json())
                    .then((res) => {
                        setState((prev) => {
                            return {
                                ...prev,
                                products: res?.products?.slice(0, 12) ?? [],
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

        handleGetProducts();
    }, [])

    return (
        <section>
            {
                state?.load ? <CardsLoading /> :
                    state?.products?.length ?
                        <section className='grid grid-cols-1 lg:grid-cols-4 gap-5 my-10'>
                            {
                                state?.products?.map((d, i) => (
                                    <div key={i}><ProductCard d={d} /></div>
                                ))
                            }
                        </section>
                        :
                        <NoDataFound />
            }
            {
                state?.products?.length ?
                    <div className='w-full flex justify-center'>
                        <button onClick={() => navigate("/all-products")} className='bg-[#d9e7ff] text-[#4b8dff] border border-[#4b8dff] text-sm px-2 py-1 rounded-full font-semibold mb-5'> View All Products</button>
                    </div>
                    :
                    <div></div>
            }
        </section>
    )
}

export default Home;