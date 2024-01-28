import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";

const AllRoutes = ()  =>{
    return (
            <Suspense fallback={<div> Loading...</div>}>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="*" element={<div> No data found </div>} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
    );
}
export default AllRoutes;