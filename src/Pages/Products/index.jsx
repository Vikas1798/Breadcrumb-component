import React, { useEffect, useState } from 'react'
import CardsLoading from '../../Components/CardsLoading';
import ProductCard from '../../Components/ProductCard';
import NoDataFound from '../../Components/NoDataFound';

const Products = () => {
    let PRODUCTS = 'https://dummyjson.com/product';

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
                                products: res?.products ?? [],
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
                                )
                                )
                            }
                        </section>
                        :
                        <NoDataFound />
            }
        </section>
    )
}

export default Products;