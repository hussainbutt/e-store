import React, { useEffect, useState, useNavigate } from "react";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductPage,
  BestSellingPage,
  EventPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage
  
} from "./routes/Routes.js";

import {ShopHomePage} from "./ShopRoutes.js"
import SellerProtectedRoute from "./SellerProtectedRoute.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { loadSeller, loadUser } from "./redux/actions/user";
import { Navigate } from "react-router-dom";
const App = () => {
  
  const dispatch = useDispatch();
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const {isLoading ,seller, isSeller} = useSelector((state) => state.seller);
  // const Navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadSeller());

    if(isSeller){
      Navigate(`/shop/${seller._id}`)
    }
  }, []);

  useEffect(() => {
    console.log('auth:', isAuthenticated, 'user:', user, 'loading:', loading);
  }, [isAuthenticated, user, loading]);
  

  return (
    <>
      {loading || isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route
              path="/seller/activation/:activation_token"
              element={<SellerActivationPage />}
            />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/faq" element={<FAQPage />} />

            <Route path="/profile" element={<ProtectedRoute isAuthenticated>
              <ProfilePage />
            </ProtectedRoute>} />
            <Route path="/shop-create" element={<ShopCreatePage />} />
            <Route path="/shop-login" element={<ShopLoginPage />} />
            <Route path="/shop/:id" element={<SellerProtectedRoute isSeller seller>
              <ShopHomePage />
            </SellerProtectedRoute>} />
            
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
