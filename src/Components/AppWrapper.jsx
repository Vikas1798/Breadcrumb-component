import React from 'react'

const AppWrapper = ({ children, className }) => {
    return (
        // <section className={`w-full max-w-[1280px] px-2 md:px-10 mx-auto ${className || ""}`}>
        <section className={`w-full md:w-[80%] px-2 mx-auto ${className || ""}`}>
            {children}
        </section>
    )
}

export default AppWrapper;