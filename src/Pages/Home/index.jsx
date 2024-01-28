import React, { useEffect, useState } from 'react'

const Home = () => {
    let PRODUCTS = 'https://dummyjson.com/product';
    const [state, setState] = useState({
        products: [],
        load: false
    })

    useEffect(() => {
        handleGetProducts();
    }, []);

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
                            products: res?.products?.slice(0, 8) ?? [],
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

    // console.log('state?.products', state?.products)

    return (
        <div className='text-4xl'>
            <h1> Home Page </h1>
            {
                state?.load ? <div> Loading...</div> :
                    state?.products?.length ?
                        <section className='grid grid-cols-1 lg:grid-cols-4 gap-4 my-10'>
                            {
                                state?.products?.map((d) => (
                                    <div key={d?.id} className='bg-gray-300 rounded-lg p-[15px] cursor-pointer hover:shadow-md' >
                                        <img src={d?.thumbnail} alt={d?.title} className='w-full object-cover aspect-square rounded-md' />
                                        <p className='text-sm mt-2'> {d?.title} </p>
                                    </div>
                                )
                                )
                            }
                        </section>
                        :
                        <div > No Data Found </div>
            }
        </div >
    )
}

export default Home;