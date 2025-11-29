import React, { useEffect } from 'react'
import ShopLogin from '../../components/Seller/ShopLogin.jsx'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ShopLoginPage() {
  const navigate = useNavigate();
  const sellerObj = useSelector((state) => state.seller);
      console.log("logging seller");

 console.log(sellerObj);
  useEffect(() => {
    if(sellerObj.Seller != null){
      navigate(`/shop/${sellerObj.Seller._id}`);
      window.location.reload(true);
    }
  }, [])
  return (
    <ShopLogin />
  )
}

export default ShopLoginPage