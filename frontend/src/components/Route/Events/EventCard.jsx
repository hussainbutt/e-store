import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown.jsx";

const EventCard = (active) => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 ${active?"unset":"mb-12"}`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt="iPhone 14 Pro Max"
          className="rounded-lg"
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center px-4">
        <h2 className={`${styles.productTitle}`}>
          iPhone 14 Pro Max 8/256GB
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nulla
          natus dignissimos omnis dolorem nihil eveniet odio eum voluptas, unde
          incidunt a quaerat facere veritatis eius optio debitis. Provident,
          dignissimos! Saepe eius impedit mollitia nisi fugiat explicabo
          consequatur, nesciunt et non maiores repellendus. Quaerat tempore
          commodi iure, dolorem ea libero modi est neque omnis nulla sit saepe
          sed beatae facere? Nostrum quod ducimus, nobis facere maxime ea
          obcaecati nihil eos reiciendis velit iure ipsum quas consequatur
          commodi temporibus, harum quaerat impedit quos expedita at dolorum
          provident quasi? Amet, quisquam consequuntur. Quasi quae odit
          repudiandae amet quis ipsa iusto reprehenderit provident magni at
          deleniti, eligendi inventore aperiam vel fugit maxime ex eius officiis
          nam unde accusamus! Sunt dolore quae quas a! Sint perferendis saepe
          maiores suscipit debitis amet! Quae expedita architecto id distinctio.
        </p>
        <div className="flex py-2 justify-between items-center">
          <div className="flex items-center">
            <h5 className="font-medium text-[18px] text-[#d55b45] pr-3 line-through">
              $1099
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              $999
            </h5>
          </div>
          <span className="pr-3 font-normal text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
