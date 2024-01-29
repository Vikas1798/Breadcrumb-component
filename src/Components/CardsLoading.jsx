import React from 'react'

const CardsLoading = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-4 gap-5 my-10'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8]?.map((d, i) => (
                    <main className='w-full h-[200px] bg-gray-200 rounded-lg animate-pulse' key={i}></main>
                )
                )
            }
        </section>
    )
}

export default CardsLoading