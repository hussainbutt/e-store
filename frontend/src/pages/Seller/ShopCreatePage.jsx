import React, { useEffect } from 'react'
import ShopCreate from '../../components/Seller/ShopCreate.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/shop/${seller._id}`);
      window.location.reload(true);
    }
  }, [])
  return (
    <div>
        <ShopCreate />
    </div>
  )
}

export default ShopCreatePage