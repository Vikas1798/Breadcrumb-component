import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";
import Breadcrumb from "../Components/Breadcrumb";
import pageNotFound from '../Assets/Image/page-not-found.png';

const AllRoutes = ()  =>{
    return (
            <Suspense fallback={<div className="flex justify-center items-center"> Loading...</div>}>
                <Router>
                    <Link to={'/'}>
                        <h1 className='text-[#4b8dff] flex justify-center text-md md:text-4xl py-10 font-bold'> Breadcrumbs Components </h1>
                    </Link>
                    <Breadcrumb type="primary" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/all-products" element={<Products />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="*" element={
                            <figure className='w-[40%]  mx-auto  my-5'>
                            <img src={pageNotFound} alt="No Data" className='rounded-lg' />
                            <h6 className='text-[#fd8274] flex justify-center text-md md:text-2xl py-10 font-bold'> Page Not Found </h6>
                        </figure>
                    } />
                    </Routes>
                </Router>
            </Suspense>
    );
}
export default AllRoutes;