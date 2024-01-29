import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import keyboardArrow from '../Assets/Icons/chevron-right.svg';
import home from '../Assets/Icons/home.svg';

const Breadcrumb = ({ type }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const paths = location?.pathname?.split("/")?.filter(x => x);

    const handleBreadcrumbTextUi = (key) => {
        switch (key) {
            case "primary":
                return "text-[#4b8dff]  bg-[#d9e7ff] border-1 border-[#4b8dff] rounded-full px-4"
            case "secondary":
                return "text-gray-400 hover:underline"
            default:
                return "text-[#000000]"
        }
    }

    const breadcrumbLastPathUi = (key) => {
        switch (key) {
            case "primary":
                return "text-gray-500 bg-gray-200 border-1 border-[#4b8dff] rounded-full px-4"
            case "secondary":
                return "text-gray-600"
            default:
                return "text-[#000000]"
        }
    }

    const handleBreadcrumbIconUi = (key) => {
        switch (key) {
            case "primary":
                return "text-[#4b8dff]"
            case "secondary":
                return "text-gray-300"
            default:
                return "text-[#000000]"
        }
    }

    return (
        <section className=''>
            <div className='flex items-center text-start'>
                {
                    type ? <p onClick={() => navigate("/")} className={`capitalize cursor-pointer ${handleBreadcrumbTextUi(type)}`}>Home</p> :
                        <figure className='flex justify-center w-[20px] h-[20px]'><img onClick={() => navigate("/")} src={home} alt="" className="w-full h-full cursor-pointer " /></figure>
                }
                {
                    paths?.map((d, i) => (
                        <p key={i} className='flex items-center text-md'>
                            {
                                type ? <img src={keyboardArrow} alt=">" className={`mx-2 w-[15px] h-[15px] ${handleBreadcrumbIconUi(type)}`} /> :
                                    <span className={`mx-2 ${handleBreadcrumbIconUi(type)}`}>{"/"}</span>

                            }
                            <span onClick={() => paths?.length - 1 !== i && navigate("/all-products")}
                                className={`capitalize   ${paths?.length - 1 === i ? breadcrumbLastPathUi(type) : `${handleBreadcrumbTextUi(type)} cursor-pointer`} `}>{d}</span>
                        </p>
                    ))
                }
            </div>
        </section>
    )
}

export default Breadcrumb;