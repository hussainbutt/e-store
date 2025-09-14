import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/styles";
import { useState } from "react";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
function Wishlist(setOpenWishlist) {
  const WishlistData = [
    {
      name: "Iphone 14 Pro",
      description: "Introducing Iphone 14 Pro",
      price: 999,
    },
    {
      name: "Iphone 14 Pro",
      description: "Introducing Iphone 14 Pro",
      price: 999,
    },
    {
      name: "Iphone 14 Pro",
      description: "Introducing Iphone 14 Pro",
      price: 999,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <RxCross1 className="w-full flex items-center" />
        
        
          
          <h5 className="pl-2 text-[20px] font-[500]">3 Items</h5>
          <br />
          <div className="w-full border-t">
            {WishlistData &&
              WishlistData.map((i, index) => <WishlistSingle key={index} data={i} />)}
          </div>
          <div>
            {/* checkout buttons */}
            <Link to="/checkout">
              <div
                className={`h-[45px] flex items-center justify-center w-[100%][bg-[#e44343] rounded-[5px]`}
              >
                <h1>
                  className="text-[#fff] text-[18px] font-[600]“ Checkout Now
                  (USD$1080)
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
const WishlistSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = value * data.price;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#a8abb14f] rounded-full w-[25px] h-[25px] justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] []text-[#00000082]">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] [text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
};
export default Wishlist;
